import type React from "react"
import { SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { NotificationProvider } from "@/components/ui/notification-provider"
import data from "./data.json"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NotificationProvider>
  
        <div className="flex min-h-screen">
         
          <main className="flex-1">
            {children}
          </main>
        </div>
    </NotificationProvider>
  )
}
