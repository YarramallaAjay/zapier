"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Zap, Info, Clock, CheckCircle, XCircle } from "lucide-react"

// Mock data - would be fetched from backend
const ZAPS = [
  {
    id: "zap-1",
    name: "Monitor ETH Price",
    trigger: "Schedule",
    action: "Send Notification",
    status: "active",
    lastRun: "2023-04-14T10:30:00Z",
    lastRunStatus: "success",
    runCount: 42,
  },
  {
    id: "zap-2",
    name: "Track NFT Sales",
    trigger: "NFT Event",
    action: "Call API",
    status: "active",
    lastRun: "2023-04-14T08:15:00Z",
    lastRunStatus: "error",
    runCount: 17,
  },
  {
    id: "zap-3",
    name: "Wallet Balance Alert",
    trigger: "Wallet Change",
    action: "Send Notification",
    status: "paused",
    lastRun: "2023-04-13T22:45:00Z",
    lastRunStatus: "success",
    runCount: 8,
  },
]

export default function DashboardPage() {
  const [zaps, setZaps] = useState(ZAPS)
  const [selectedZap, setSelectedZap] = useState<(typeof ZAPS)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch zaps
    const fetchZaps = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setZaps(ZAPS)
      setIsLoading(false)
    }

    fetchZaps()
  }, [])

  const handleZapClick = (zap: (typeof ZAPS)[0]) => {
    setSelectedZap(zap)
    setIsDialogOpen(true)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your zaps and automations</p>
        </div>
        <Button asChild>
          <Link href="/zap/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Zap
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Zaps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{zaps.length}</div>
            <p className="text-xs text-muted-foreground">{zaps.filter((z) => z.status === "active").length} active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Executions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{zaps.reduce((acc, zap) => acc + zap.runCount, 0)}</div>
            <p className="text-xs text-muted-foreground">Across all zaps</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((zaps.filter((z) => z.lastRunStatus === "success").length / zaps.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">Last execution success rate</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Zaps</CardTitle>
          <CardDescription>View and manage your automated workflows</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="flex flex-col items-center gap-2">
                <Zap className="h-8 w-8 animate-pulse text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Loading your zaps...</p>
              </div>
            </div>
          ) : zaps.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="flex flex-col items-center gap-2 max-w-md text-center">
                <Zap className="h-8 w-8 text-muted-foreground" />
                <h3 className="text-lg font-semibold">No zaps yet</h3>
                <p className="text-sm text-muted-foreground">
                  Create your first zap to start automating your web3 workflows.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/zap/create">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Zap
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Trigger</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Run</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {zaps.map((zap) => (
                  <TableRow
                    key={zap.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => handleZapClick(zap)}
                  >
                    <TableCell className="font-medium">{zap.name}</TableCell>
                    <TableCell>{zap.trigger}</TableCell>
                    <TableCell>{zap.action}</TableCell>
                    <TableCell>
                      <Badge variant={zap.status === "active" ? "default" : "secondary"}>
                        {zap.status === "active" ? "Active" : "Paused"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {zap.lastRunStatus === "success" ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className="text-sm">{formatDate(zap.lastRun)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Info className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Zap Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedZap?.name}</DialogTitle>
            <DialogDescription>Zap details and execution history</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Trigger</h4>
                <p className="text-sm">{selectedZap?.trigger}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Action</h4>
                <p className="text-sm">{selectedZap?.action}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Status</h4>
                <Badge variant={selectedZap?.status === "active" ? "default" : "secondary"}>
                  {selectedZap?.status === "active" ? "Active" : "Paused"}
                </Badge>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">Total Runs</h4>
                <p className="text-sm">{selectedZap?.runCount}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Latest Execution</h4>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{selectedZap && formatDate(selectedZap.lastRun)}</span>
                    </div>
                    <Badge variant={selectedZap?.lastRunStatus === "success" ? "default" : "destructive"}>
                      {selectedZap?.lastRunStatus === "success" ? "Success" : "Failed"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline" asChild>
                <Link href={`/zap/edit/${selectedZap?.id}`}>Edit Zap</Link>
              </Button>
              <Button asChild>
                <Link href={`/zap/history/${selectedZap?.id}`}>View History</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
