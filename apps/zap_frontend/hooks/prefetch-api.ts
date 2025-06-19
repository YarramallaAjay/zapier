import { axiosInstance } from "@/apiHandlers/ApiInstance";
import { NEXT_PUBLIC_BACKEND_URL } from "@/config";
import { AxiosResponse } from "axios";

export interface PREFETCH_API {
  method: "GET" | "POST" | "PUT" | "DELETE";
  API: string;
}

export const DASHBOARD_MAIN: PREFETCH_API[] = [
  {
    API: "zaps",
    method: "GET"
  },
  {
    API: "integrator/apps/team",
    method: "GET"
  }
];

export async function prefetch(screen: PREFETCH_API[]): Promise<Record<string, any>> {
    try {
      const responseMap: Record<string, any> = {};
  
      const promises = screen.map(async (s) => {
        const res = await axiosInstance({
          url: s.API,
          method: s.method
        });
  
        if (res.status === 200 || res.status === 201) {
          console.log(`Fetched: ${s.API}`, res.data);
          responseMap[s.API] = res.data;
        } else {
          console.error(`Failed to fetch: ${s.API}`, res.data);
          throw new Error(`Failed: ${s.API}`);
        }
      });
  
      await Promise.all(promises);
      return responseMap;
  
    } catch (e) {
      console.error("Prefetch error:", e);
      throw e;
    }
  }
  