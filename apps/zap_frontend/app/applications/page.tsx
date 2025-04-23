"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Trash2 } from "lucide-react"
import { useAuth } from '@/contexts/auth-context'
import { ApiResponse, App } from '@/lib/types'
import { axiosInstance } from "@/apiHandlers/ApiInstance"

export default function ApplicationsPage() {
  const { user } = useAuth()
  const [apps, setApps] = useState<App[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (user) {
      loadApps()
    }
  }, [user])

  const loadApps = async () => {
    try {
      const response = await axiosInstance.get<{response:ApiResponse}>("/integrator/apps")
      if (response.status===200) {
        setApps(response.data.response.data || [])
      } else {
        setError(response.data.response.error || 'Failed to load apps')
      }
      setLoading(false)
    } catch {
      setError('Failed to load apps')
      setLoading(false)
    }
  }

  const handleDeleteApp = async (appId: string) => {
    // TODO: Implement app deletion
    console.log('Delete app:', appId)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Applications</h1>
        <p className="text-gray-600">Manage your app integrations</p>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <Card key={app.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {app.icon}
                  </div>
                  <div>
                    <CardTitle>{app.name}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteApp(app.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Status</span>
                  <span className={app.isActive ? 'text-green-500' : 'text-red-500'}>
                    {app.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Created</span>
                  <span>{new Date(app.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New App Card */}
        <Card className="border-dashed border-2 hover:border-purple-500 transition-colors">
          <CardContent className="flex flex-col items-center justify-center h-full min-h-[200px]">
            <Button variant="ghost" className="flex flex-col items-center space-y-2">
              <span className="text-gray-500">Add New App</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
