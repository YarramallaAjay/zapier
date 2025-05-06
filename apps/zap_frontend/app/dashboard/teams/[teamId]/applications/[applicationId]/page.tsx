import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { KeyIcon, BoltIcon, PlayIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

import data from "@/app/dashboard/data.json"

export default function ApplicationPage({
  params,
}: {
  params: { teamId: string; applicationId: string }
}) {
  const team = data.teams.find((team) => team.id === params.teamId)
  if (!team) {
    notFound()
  }

  const application = team.applications.find((app) => app.id === params.applicationId)
  if (!application) {
    notFound()
  }

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} activeTeamId={params.teamId} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-4 px-4 py-6 lg:px-6">
            <Button variant="outline" size="icon" asChild>
              <Link href={`/dashboard/teams/${params.teamId}`}>
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back to team</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{application.name}</h1>
              <p className="text-muted-foreground">{application.description}</p>
            </div>
            <Badge className="ml-auto" variant={application.status === "active" ? "default" : "secondary"}>
              {application.status === "active" ? "Active" : "Development"}
            </Badge>
          </div>

          <div className="px-4 lg:px-6 pb-8">
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="auth">Authentication</TabsTrigger>
                <TabsTrigger value="triggers">Triggers</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <KeyIcon className="h-5 w-5" />
                        Authentication Methods
                      </CardTitle>
                      <CardDescription>Manage how users authenticate</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {application.authMethods.map((auth) => (
                          <div key={auth.id} className="flex items-center justify-between">
                            <span>{auth.name}</span>
                            <Badge variant={auth.enabled ? "default" : "outline"}>
                              {auth.enabled ? "Enabled" : "Disabled"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BoltIcon className="h-5 w-5" />
                        Triggers
                      </CardTitle>
                      <CardDescription>Events that initiate workflows</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {application.triggers.map((trigger) => (
                          <div key={trigger.id} className="flex items-center justify-between">
                            <span>{trigger.name}</span>
                            <Badge variant={trigger.enabled ? "default" : "outline"}>
                              {trigger.enabled ? "Enabled" : "Disabled"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PlayIcon className="h-5 w-5" />
                        Actions
                      </CardTitle>
                      <CardDescription>Operations performed by the application</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {application.actions.map((action) => (
                          <div key={action.id} className="flex items-center justify-between">
                            <span>{action.name}</span>
                            <Badge variant={action.enabled ? "default" : "outline"}>
                              {action.enabled ? "Enabled" : "Disabled"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="auth">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication Methods</CardTitle>
                    <CardDescription>Configure how users authenticate with your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {application.authMethods.map((auth) => (
                        <div key={auth.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{auth.name}</h3>
                              <p className="text-sm text-muted-foreground">Type: {auth.type}</p>
                            </div>
                            <Button variant={auth.enabled ? "default" : "outline"} size="sm">
                              {auth.enabled ? "Disable" : "Enable"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="triggers">
                <Card>
                  <CardHeader>
                    <CardTitle>Triggers</CardTitle>
                    <CardDescription>Configure events that initiate workflows in your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {application.triggers.map((trigger) => (
                        <div key={trigger.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{trigger.name}</h3>
                              <p className="text-sm text-muted-foreground">{trigger.description}</p>
                            </div>
                            <Button variant={trigger.enabled ? "default" : "outline"} size="sm">
                              {trigger.enabled ? "Disable" : "Enable"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="actions">
                <Card>
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                    <CardDescription>Configure operations performed by your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {application.actions.map((action) => (
                        <div key={action.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{action.name}</h3>
                              <p className="text-sm text-muted-foreground">{action.description}</p>
                            </div>
                            <Button variant={action.enabled ? "default" : "outline"} size="sm">
                              {action.enabled ? "Disable" : "Enable"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Settings</CardTitle>
                    <CardDescription>Manage general settings for your application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <h3 className="font-medium">Application Name</h3>
                        <input
                          type="text"
                          className="w-full rounded-md border px-3 py-2"
                          defaultValue={application.name}
                        />
                      </div>
                      <div className="grid gap-2">
                        <h3 className="font-medium">Description</h3>
                        <textarea
                          className="w-full rounded-md border px-3 py-2"
                          rows={3}
                          defaultValue={application.description}
                        />
                      </div>
                      <div className="grid gap-2">
                        <h3 className="font-medium">Status</h3>
                        <select className="w-full rounded-md border px-3 py-2" defaultValue={application.status}>
                          <option value="active">Active</option>
                          <option value="development">Development</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>
                      <Button className="mt-4">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
