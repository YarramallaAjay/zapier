"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/auth-context";
import { Zap as ZapType, App, ApiResponse } from "@/lib/types";
import { axiosInstance } from "@/apiHandlers/ApiInstance";
import { useUserStore } from "@/store/userStore";
import {useRouter} from "next/router"
import { AxiosResponse } from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

export default function DashboardPage() {
  const { user } = useAuth();
  const [zaps, setZaps] = useState<ZapType[]>([]);
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedZap, setSelectedZap] = useState<ZapType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (user && user.id) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    setLoading(true);
    try {
      const user=await useUserStore((state)=>state.user)
     if(user){
      console.log(`setting cached user:${user}`)
      user.team?setApps(user.team.apps):[]
     } 
     else{
      console.log("user not found...login again!")
      router.push("/login");
     }
      // const [zapsRes, appsRes] = await Promise.all([
      //   axiosInstance.get<ApiResponse>(`${backendUrl}/zap/`),
      //   // axiosInstance.get<ApiResponse>(`${backendUrl}/apps/`),
      // ]);

      user.zaps?setZaps(user.zaps):[];
      // setApps(appsRes.data.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  const handleZapClick = (zap: ZapType) => {
    setSelectedZap(zap);
    setIsDialogOpen(true);
  };
  
  const refreshzaps= async ()=>{
          const zapsRes= await axiosInstance.get<AxiosResponse>(`${backendUrl}/zap/`);
          if(zapsRes){
            setZaps(zapsRes.data)
          }
  }

  const formatDate = (dateString: string) => new Date(dateString).toLocaleString();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
        <p className="text-gray-600">Manage your automations and apps</p>
      </div>
      <div >
        <Button onClick={refreshzaps}>
          Refresh zaps
        </Button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {zaps.length===0 && (<div className="text-center py-8">
                <Zap className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No zaps</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new zap.</p>
              </div>):(

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Your Zaps</CardTitle>
                <CardDescription>Manage your automations</CardDescription>
              </div>
              <Link href="/zap/create">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Zap
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
              <div className="space-y-4">
                {zaps.map((zap) => (
                  <div key={zap.id} onClick={() => handleZapClick(zap)} className="cursor-pointer">
                    <Card className="hover:bg-gray-50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">{zap.name}</h3>
                            <p className="text-sm text-gray-500">{zap.description}</p>
                          </div>
                          <div className="text-sm text-gray-500">{zap.isActive ? "Active" : "Inactive"}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
          </CardContent>
        </Card>)}
      </div>
    </div>
  );
}