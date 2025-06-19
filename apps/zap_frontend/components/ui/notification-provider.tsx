"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Notification, NotificationType } from "./notification-panel"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/dashboard/ui/drawer"
import { Button } from "@/components/ui/button"
import { XCircleIcon, CheckCircleIcon, InfoIcon, AlertTriangleIcon } from "lucide-react"

// Generate a random ID for notifications
const generateId = () => Math.random().toString(36).substring(2, 9)

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, "id" | "timestamp" | "read">) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  removeNotification: (id: string) => void
  clearAllNotifications: () => void
  showImportantNotification: (notification: Omit<Notification, "id" | "timestamp" | "read">) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [importantNotification, setImportantNotification] = useState<Notification | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const addNotification = useCallback((notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: generateId(),
      timestamp: new Date(),
      read: false,
    }
    setNotifications((prev) => [newNotification, ...prev])
  }, [])

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }, [])

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }, [])

  const clearAllNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  const showImportantNotification = useCallback((notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: generateId(),
      timestamp: new Date(),
      read: false,
    }
    setImportantNotification(newNotification)
    setIsDrawerOpen(true)

    // Also add to regular notifications
    setNotifications((prev) => [newNotification, ...prev])
  }, [])

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "success":
        return <CheckCircleIcon className="h-6 w-6 text-green-500" />
      case "error":
        return <XCircleIcon className="h-6 w-6 text-red-500" />
      case "warning":
        return <AlertTriangleIcon className="h-6 w-6 text-amber-500" />
      case "info":
      default:
        return <InfoIcon className="h-6 w-6 text-blue-500" />
    }
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
    if (importantNotification) {
      markAsRead(importantNotification.id)
    }
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAsRead,
        markAllAsRead,
        removeNotification,
        clearAllNotifications,
        showImportantNotification,
      }}
    >
      {children}

      {importantNotification && (
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerContent side="bottom" className="max-w-md mx-auto rounded-t-lg">
            <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-full">
              {getNotificationIcon(importantNotification.type)}
            </div>
            <DrawerHeader>
              <DrawerTitle>{importantNotification.title}</DrawerTitle>
              <DrawerDescription>{importantNotification.message}</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              {importantNotification.link && (
                <Button
                  onClick={() => {
                    handleDrawerClose()
                    window.location.href = importantNotification.link!
                  }}
                >
                  View Details
                </Button>
              )}
              <Button variant="outline" onClick={handleDrawerClose}>
                Dismiss
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider")
  }
  return context
}
