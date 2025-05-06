"use client"

import type React from "react"

import { useState } from "react"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeftIcon, KeyIcon, BoltIcon, PlayIcon, Loader2Icon, AppWindowIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"

import data from "../../../../data.json"

export default function NewApplicationPage({ params }: { params: { teamId: string } }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentTab, setCurrentTab] = useState("basic")

  const team = data.teams.find((team) => team.id === params.teamId)
  if (!team) {
    notFound()
  }

  // Form state
  const [appName, setAppName] = useState("")
  const [appDescription, setAppDescription] = useState("")
  const [appStatus, setAppStatus] = useState("development")

  // Auth methods
  const [authMethods, setAuthMethods] = useState([
    { id: "auth-email", type: "email", name: "Email & Password", enabled: true },
    { id: "auth-oauth", type: "oauth", name: "OAuth (Google, GitHub)", enabled: false },
    { id: "auth-sso", type: "sso", name: "Single Sign-On", enabled: false },
  ])

  // Triggers
  const [triggers, setTriggers] = useState([
    {
      id: "trigger-user-register",
      name: "User Registration",
      description: "Triggered when a new user registers",
      enabled: true,
    },
    { id: "trigger-user-login", name: "User Login", description: "Triggered when a user logs in", enabled: false },
  ])

  // Actions
  const [actions, setActions] = useState([
    {
      id: "action-welcome-email",
      name: "Send Welcome Email",
      description: "Sends a welcome email to new users",
      enabled: true,
    },
    {
      id: "action-create-profile",
      name: "Create User Profile",
      description: "Creates a default user profile",
      enabled: false,
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would make an API call to create the application
      setIsSubmitting(false)
      router.push(`/dashboard/teams/${params.teamId}`)
    }, 1500)
  }

  const toggleAuthMethod = (id: string) => {
    setAuthMethods(authMethods.map((method) => (method.id === id ? { ...method, enabled: !method.enabled } : method)))
  }

  const toggleTrigger = (id: string) => {
    setTriggers(triggers.map((trigger) => (trigger.id === id ? { ...trigger, enabled: !trigger.enabled } : trigger)))
  }

  const toggleAction = (id: string) => {
    setActions(actions.map((action) => (action.id === id ? { ...action, enabled: !action.enabled } : action)))
  }

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} activeTeamId={params.teamId} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col py-6 px-4 lg:px-6">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="outline" size="icon" asChild className="h-8 w-8">
              <Link href={`/dashboard/teams/${params.teamId}`}>
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back to team</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Create New Application</h1>
              <p className="text-muted-foreground">Add a new application to {team.name}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="auth">Authentication</TabsTrigger>
                <TabsTrigger value="triggers">Triggers</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
              </TabsList>

              <TabsContent value="basic">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Enter the basic details for your application</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="app-name">Application Name</Label>
                      <Input
                        id="app-name"
                        placeholder="Enter application name"
                        value={appName}
                        onChange={(e) => setAppName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="app-description">Description</Label>
                      <Textarea
                        id="app-description"
                        placeholder="Describe what this application does"
                        value={appDescription}
                        onChange={(e) => setAppDescription(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="app-status">Status</Label>
                      <Select value={appStatus} onValueChange={setAppStatus}>
                        <SelectTrigger id="app-status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="archived">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => router.push(`/dashboard/teams/${params.teamId}`)}>
                      Cancel
                    </Button>
                    <Button type="button" onClick={() => setCurrentTab("auth")}>
                      Next: Authentication
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="auth">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <KeyIcon className="h-5 w-5" />
                      Authentication Methods
                    </CardTitle>
                    <CardDescription>Configure how users will authenticate with your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {authMethods.map((method) => (
                        <div key={method.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{method.name}</h3>
                              <p className="text-sm text-muted-foreground">Type: {method.type}</p>
                            </div>
                            <Button
                              variant={method.enabled ? "default" : "outline"}
                              size="sm"
                              onClick={() => toggleAuthMethod(method.id)}
                              type="button"
                            >
                              {method.enabled ? "Enabled" : "Enable"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" type="button" onClick={() => setCurrentTab("basic")}>
                      Back
                    </Button>
                    <Button type="button" onClick={() => setCurrentTab("triggers")}>
                      Next: Triggers
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="triggers">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BoltIcon className="h-5 w-5" />
                      Triggers
                    </CardTitle>
                    <CardDescription>Configure events that initiate workflows in your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {triggers.map((trigger) => (
                        <div key={trigger.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{trigger.name}</h3>
                              <p className="text-sm text-muted-foreground">{trigger.description}</p>
                            </div>
                            <Button
                              variant={trigger.enabled ? "default" : "outline"}
                              size="sm"
                              onClick={() => toggleTrigger(trigger.id)}
                              type="button"
                            >
                              {trigger.enabled ? "Enabled" : "Enable"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" type="button" onClick={() => setCurrentTab("auth")}>
                      Back
                    </Button>
                    <Button type="button" onClick={() => setCurrentTab("actions")}>
                      Next: Actions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="actions">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PlayIcon className="h-5 w-5" />
                      Actions
                    </CardTitle>
                    <CardDescription>Configure operations performed by your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {actions.map((action) => (
                        <div key={action.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{action.name}</h3>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                            <Button
                              variant={action.enabled ? "default" : "outline"}
                              size="sm"
                              onClick={() => toggleAction(action.id)}
                              type="button"
                            >
                              {action.enabled ? "Enabled" : "Enable"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" type="button" onClick={() => setCurrentTab("triggers")}>
                      Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        <>
                          <AppWindowIcon className="mr-2 h-4 w-4" />
                          Create Application
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </form>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
