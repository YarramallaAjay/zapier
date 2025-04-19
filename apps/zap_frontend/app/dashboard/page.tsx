"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Zap, Info, Clock, CheckCircle, XCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { zapApi, appsApi } from "@/lib/api"
import { Zap as ZapType, App } from "@/lib/types"

export default function DashboardPage() {
  const { user } = useAuth()
  const [zaps, setZaps] = useState<ZapType[]>([])
  const [apps, setApps] = useState<App[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedZap, setSelectedZap] = useState<(typeof zaps)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    if (user) {
      loadData()
    }
  }, [user])

  const loadData = async () => {
    try {
      const [zapsResponse, appsResponse] = await Promise.all([
        zapApi.getZaps(),
        appsApi.getApps(),
      ])

      if (zapsResponse.success) {
        setZaps(zapsResponse.data || [])
      }
      if (appsResponse.success) {
        setApps(appsResponse.data || [])
      }
      setLoading(false)
    } catch (err) {
      setError("Failed to load data")
      setLoading(false)
    }
  }

  const handleZapClick = (zap: (typeof zaps)[0]) => {
    setSelectedZap(zap)
    setIsDialogOpen(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  // return (
  //   <div className="container mx-auto p-6">
  //     <div className="mb-8">
  //       <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
  //       <p className="text-gray-600">Manage your automations and apps</p>
  //     </div>

  //     {error && (
  //       <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
  //         {error}
  //       </div>
  //     )}

  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //       {/* Zaps Section */}
  //       <Card>
  //         <CardHeader>
  //           <div className="flex items-center justify-between">
  //             <div>
  //               <CardTitle>Your Zaps</CardTitle>
  //               <CardDescription>Manage your automations</CardDescription>
  //             </div>
  //             <Link href="/zap/create">
  //               <Button>
  //                 <Plus className="mr-2 h-4 w-4" />
  //                 Create Zap
  //               </Button>
  //             </Link>
  //           </div>
  //         </CardHeader>
  //         <CardContent>
  //           {zaps.length === 0 ? (
  //             <div className="text-center py-8">
  //               <Zap className="mx-auto h-12 w-12 text-gray-400" />
  //               <h3 className="mt-2 text-sm font-medium text-gray-900">No zaps</h3>
  //               <p className="mt-1 text-sm text-gray-500">
  //                 Get started by creating a new zap.
  //               </p>
  //               <div className="mt-6">
  //                 <Link href="/zap/create">
  //                   <Button>
  //                     <Plus className="mr-2 h-4 w-4" />
  //                     Create Zap
  //                   </Button>
  //                 </Link>
  //               </div>
  //             </div>
  //           ) : (
  //             <div className="space-y-4">
  //               {zaps.map((zap) => (
  //                 <Link key={zap.id} href={`/zap/${zap.id}`}>
  //                   <Card className="hover:bg-gray-50 cursor-pointer">
  //                     <CardContent className="p-4">
  //                       <div className="flex items-center justify-between">
  //                         <div>
  //                           <h3 className="font-medium">{zap.name}</h3>
  //                           <p className="text-sm text-gray-500">{zap.description}</p>
  //                         </div>
  //                         <div className="text-sm text-gray-500">
  //                           {zap.isActive ? "Active" : "Inactive"}
  //                         </div>
  //                       </div>
  //                     </CardContent>
  //                   </Card>
  //                 </Link>
  //               ))}
  //             </div>
  //           )}
  //         </CardContent>
  //       </Card>

  //       {/* Apps Section */}
  //       <Card>
  //         <CardHeader>
  //           <div className="flex items-center justify-between">
  //             <div>
  //               <CardTitle>Connected Apps</CardTitle>
  //               <CardDescription>Manage your app integrations</CardDescription>
  //             </div>
  //             <Link href="/applications">
  //               <Button variant="outline">View All</Button>
  //             </Link>
  //           </div>
  //         </CardHeader>
  //         <CardContent>
  //           {apps.length === 0 ? (
  //             <div className="text-center py-8">
  //               <div className="mx-auto h-12 w-12 text-gray-400">📱</div>
  //               <h3 className="mt-2 text-sm font-medium text-gray-900">No apps</h3>
  //               <p className="mt-1 text-sm text-gray-500">
  //                 Connect your first app to get started.
  //               </p>
  //               <div className="mt-6">
  //                 <Link href="/applications">
  //                   <Button variant="outline">Connect Apps</Button>
  //                 </Link>
  //               </div>
  //             </div>
  //           ) : (
  //             <div className="space-y-4">
  //               {apps.slice(0, 3).map((app) => (
  //                 <div key={app.id} className="flex items-center space-x-4 p-4 border rounded-lg">
  //                   <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
  //                     {app.icon}
  //                   </div>
  //                   <div>
  //                     <h3 className="font-medium">{app.name}</h3>
  //                     <p className="text-sm text-gray-500">{app.description}</p>
  //                   </div>
  //                 </div>
  //               ))}
  //               {apps.length > 3 && (
  //                 <div className="text-center">
  //                   <Link href="/applications">
  //                     <Button variant="link">
  //                       View {apps.length - 3} more apps
  //                     </Button>
  //                   </Link>
  //                 </div>
  //               )}
  //             </div>
  //           )}
  //         </CardContent>
  //       </Card>
  //     </div>

  //     {/* Zap Details Dialog */}
  //     <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  //       <DialogContent className="sm:max-w-lg">
  //         <DialogHeader>
  //           <DialogTitle>{selectedZap?.name}</DialogTitle>
  //           <DialogDescription>Zap details and execution history</DialogDescription>
  //         </DialogHeader>

  //         <div className="space-y-4">
  //           <div className="grid grid-cols-2 gap-4">
  //             <div>
  //               <h4 className="text-sm font-medium mb-1">Trigger</h4>
  //               <p className="text-sm">{selectedZap?.trigger}</p>
  //             </div>
  //             <div>
  //               <h4 className="text-sm font-medium mb-1">Action</h4>
  //               <p className="text-sm">{selectedZap?.action}</p>
  //             </div>
  //             <div>
  //               <h4 className="text-sm font-medium mb-1">Status</h4>
  //               <Badge variant={selectedZap?.status === "active" ? "default" : "secondary"}>
  //                 {selectedZap?.status === "active" ? "Active" : "Paused"}
  //               </Badge>
  //             </div>
  //             <div>
  //               <h4 className="text-sm font-medium mb-1">Total Runs</h4>
  //               <p className="text-sm">{selectedZap?.runCount}</p>
  //             </div>
  //           </div>

  //           <div>
  //             <h4 className="text-sm font-medium mb-2">Latest Execution</h4>
  //             <Card>
  //               <CardContent className="p-4">
  //                 <div className="flex items-center justify-between">
  //                   <div className="flex items-center gap-2">
  //                     <Clock className="h-4 w-4 text-muted-foreground" />
  //                     <span className="text-sm">{selectedZap && formatDate(selectedZap.lastRun)}</span>
  //                   </div>
  //                   <Badge variant={selectedZap?.lastRunStatus === "success" ? "default" : "destructive"}>
  //                     {selectedZap?.lastRunStatus === "success" ? "Success" : "Failed"}
  //                   </Badge>
  //                 </div>
  //               </CardContent>
  //             </Card>
  //           </div>

  //           <div className="flex justify-end gap-2">
  //             <Button variant="outline" asChild>
  //               <Link href={`/zap/edit/${selectedZap?.id}`}>Edit Zap</Link>
  //             </Button>
  //             <Button asChild>
  //               <Link href={`/zap/history/${selectedZap?.id}`}>View History</Link>
  //             </Button>
  //           </div>
  //         </div>
  //       </DialogContent>
  //     </Dialog>
  //   </div>
  // )

  return <>
  Dashboard
  </>
}
