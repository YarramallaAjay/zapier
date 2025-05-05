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
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";
import { useToast } from "@/hooks/use-toast"
import { useUserStore } from "@/store/userStore";


const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const {setUser} =useUserStore();
  const [zaps, setZaps] = useState<ZapType[]>([]);
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedZap, setSelectedZap] = useState<ZapType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const {toast}=useToast()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }
    loadData();
  }, [isAuthenticated, router]);

  const loadData = async () => {
    setLoading(true);
    try {
      if (user) {
        console.log(`Loading data for user: ${user.email}`);
        if (user.team) {
          setApps(user.team.apps || []);
        }
        if (user.zaps) {
          setZaps(user.zaps);
        }
      } else {
        console.log("User not found, redirecting to login");
        router.push("/login");
      }
    } catch (err) {
      console.error("Error loading dashboard data:", err);
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  const handleZapClick = (zap: ZapType) => {
    setSelectedZap(zap);
    setIsDialogOpen(true);
  };
  
  const refreshzaps = async () => {
    try {
      setLoading(true)
      console.log("loading zaps")
      const zapsRes = await axiosInstance.get<AxiosResponse>(`${backendUrl}/zap/`);
      if (zapsRes.status===200) {
        console.log(zapsRes.data)
        setZaps(zapsRes.data.data.userZaps);
        const curr_user={...user}
        curr_user.zaps=zapsRes.data.data.userZaps
        setUser(curr_user)
        console.log(user)
        console.log("loaded")
        setLoading(false)
        toast({
          title: "Success",
          description: "Refreshed",
        })
      }
    } catch (err) {
      console.error("Error refreshing zaps:", err);
      setError("Failed to refresh zaps.");
    }
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleString();

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-full">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="mb-8 flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
        <p className="text-gray-600 text-lg">Manage your automations and apps</p>
      </div>

      <div className="mb-8">
        <Button 
          onClick={refreshzaps}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Zap className="h-4 w-4" />
          Refresh Zaps
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="border shadow-sm">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Your Zaps</CardTitle>
                <CardDescription>Manage your automations</CardDescription>
              </div>
              <Link href="/zap/create">
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create Zap
                </Button>
              </Link>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            {!zaps ? (
              <div className="text-center py-12">
                <Zap className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">No zaps yet</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Get started by creating your first automation.
                </p>
                <div className="mt-6">
                  <Link href="/zap/create">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create Your First Zap
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {zaps.map((zap) => (
                  <div 
                    key={zap.id} 
                    onClick={() => handleZapClick(zap)} 
                    className="cursor-pointer transition-all hover:scale-[1.01]"
                  >
                    <Card className="border hover:border-gray-300 hover:shadow-md">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h3 className="font-medium text-gray-900">{zap.name}</h3>
                            <p className="text-sm text-gray-500">{zap.description}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            zap.isActive 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {zap.isActive ? "Active" : "Inactive"}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedZap?.name}</DialogTitle>
            <DialogDescription>{selectedZap?.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">
                Last updated: {selectedZap?.updatedAt ? formatDate(selectedZap.updatedAt) : 'Never'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={selectedZap?.isActive ? "default" : "secondary"}>
                {selectedZap?.isActive ? "Active" : "Inactive"}
              </Badge>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}