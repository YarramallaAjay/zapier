"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MoreHorizontalIcon,
  PlayIcon,
  PauseIcon,
  EditIcon,
  CopyIcon,
  TrashIcon,
  ClockIcon
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dashboard/ui/dropdown-menu"

// Define type for a Zap
type Zap = {
  id: string
  name: string
  status: "active" | "inactive"
  trigger: {
    app: string
    event: string
  }
  action: {
    app: string
    event: string
  }
  lastRun: string
  runCount?: number
}

interface ZapsTableProps {
  zaps: Zap[]
  loading?: boolean
}

export const ZapsTable = ({ zaps, loading = false }: ZapsTableProps) => {
  const [localZaps, setLocalZaps] = useState<Zap[]>([])

  useEffect(() => {
    if (Array.isArray(zaps)) {
      setLocalZaps(zaps)
    }
  }, [zaps])

  const toggleZapStatus = useCallback((zapId: string) => {
    setLocalZaps(prev => 
      prev.map((zap) =>
        zap.id === zapId
          ? { ...zap, status: zap.status === "active" ? "inactive" : "active" }
          : zap
      )
    )
  }, [])

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }, [])

  const getTimeSince = useCallback((dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 60) {
      return `${diffMins} min${diffMins !== 1 ? "s" : ""} ago`
    }

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`
    }

    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`
  }, [])

  if (loading) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Trigger → Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Run</TableHead>
              <TableHead>Run Count</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                Loading zaps...
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead>Trigger → Action</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Run</TableHead>
            <TableHead>Run Count</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {localZaps.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground">
                No zaps configured yet.
              </TableCell>
            </TableRow>
          ) : (
            localZaps.map((zap) => (
              <TableRow key={zap.id}>
                <TableCell className="font-medium">
                  <Link href={`/dashboard/zaps/${zap.id}`} className="hover:underline">
                    {zap.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="font-medium">{zap.trigger.app}</span>
                    <span className="mx-2">→</span>
                    <span className="font-medium">{zap.action.app}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {zap.trigger.event} → {zap.action.event}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={zap.status === "active" ? "default" : "secondary"}
                    className="flex w-20 justify-center items-center gap-1.5"
                  >
                    <div className={`h-2 w-2 rounded-full ${zap.status === "active" ? "bg-green-500" : "bg-red-500"}`} />
                    {zap.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span title={formatDate(zap.lastRun)}>{getTimeSince(zap.lastRun)}</span>
                  </div>
                </TableCell>
                <TableCell>{zap.runCount?.toLocaleString?.() ?? 0}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleZapStatus(zap.id)}
                      title={zap.status === "active" ? "Pause Zap" : "Activate Zap"}
                    >
                      {zap.status === "active" ? (
                        <PauseIcon className="h-4 w-4" />
                      ) : (
                        <PlayIcon className="h-4 w-4" />
                      )}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontalIcon className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/zaps/${zap.id}`}>
                            <EditIcon className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CopyIcon className="mr-2 h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <TrashIcon className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
