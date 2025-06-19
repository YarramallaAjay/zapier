"use client"

import { BellIcon, CheckCircleIcon, XCircleIcon, InfoIcon, XIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/dashboard/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dashboard/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export type NotificationType = "success" | "error" | "info" | "warning"

export interface Notification {
  id: string
  title: string
  message: string
  type: NotificationType
  timestamp: Date
  read: boolean
  link?: string
}

interface NotificationPanelProps {
  notifications: Notification[]
  onMarkAsRead: (id: string) => void
  onMarkAllAsRead: () => void
  onRemove: (id: string) => void
  onClearAll: () => void
}

export function NotificationPanel({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onRemove,
  onClearAll,
}: NotificationPanelProps) {
  const unreadCount = notifications.filter((notification) => !notification.read).length

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case "error":
        return <XCircleIcon className="h-5 w-5 text-red-500" />
      case "warning":
        return <InfoIcon className="h-5 w-5 text-amber-500" />
      case "info":
      default:
        return <InfoIcon className="h-5 w-5 text-blue-500" />
    }
  }

  const formatTimestamp = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours}h ago`

    const diffDays = Math.floor(diffHours / 24)
    if (diffDays === 1) return "Yesterday"

    return date.toLocaleDateString()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <BellIcon className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {notifications.length > 0 && (
            <Button variant="ghost" size="sm" onClick={onMarkAllAsRead} className="h-auto px-2 py-1 text-xs">
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length > 0 ? (
          <>
            <ScrollArea className="h-[300px]">
              <DropdownMenuGroup>
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className={cn(
                      "flex flex-col items-start gap-1 p-3 focus:bg-accent",
                      !notification.read && "bg-muted/50",
                    )}
                    onSelect={(e) => {
                      e.preventDefault()
                      if (!notification.read) {
                        onMarkAsRead(notification.id)
                      }
                    }}
                  >
                    <div className="flex w-full items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        {getNotificationIcon(notification.type)}
                        <div>
                          <div className="font-medium">{notification.title}</div>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                          <div className="mt-1 flex items-center text-xs text-muted-foreground">
                            <ClockIcon className="mr-1 h-3 w-3" />
                            {formatTimestamp(notification.timestamp)}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 shrink-0 rounded-full p-0 text-muted-foreground/50 hover:text-muted-foreground"
                        onClick={(e) => {
                          e.stopPropagation()
                          onRemove(notification.id)
                        }}
                      >
                        <XIcon className="h-3 w-3" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </ScrollArea>
            <DropdownMenuSeparator />
            <div className="p-2">
              <Button variant="outline" size="sm" className="w-full" onClick={onClearAll}>
                Clear all notifications
              </Button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="rounded-full bg-muted p-3">
              <BellIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mt-3 text-sm font-medium">No notifications</h3>
            <p className="text-xs text-muted-foreground">You're all caught up!</p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
