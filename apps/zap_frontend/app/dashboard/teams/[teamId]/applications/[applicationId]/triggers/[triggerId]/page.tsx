import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/dashboard/ui/select"
import { Switch } from "@/components/ui/dashboard/ui/switch"
import { ArrowLeftIcon, BoltIcon, CodeIcon } from "lucide-react"
import Link from "next/link"

import data from "@/app/dashboard/data.json"

export default function TriggerConfigPage({
  params,
}: {
  params: { teamId: string; applicationId: string; triggerId: string }
}) {
  const team = data.teams.find((team) => team.id === params.teamId)
  if (!team) {
    notFound()
  }

  const application = team.applications.find((app) => app.id === params.applicationId)
  if (!application) {
    notFound()
  }

  const trigger = application.triggers.find((trigger) => trigger.id === params.triggerId)
  if (!trigger) {
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
              <Link href={`/dashboard/teams/${params.teamId}/applications/${params.applicationId}`}>
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back to application</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <BoltIcon className="h-5 w-5" />
                {trigger.name} Configuration
              </h1>
              <p className="text-muted-foreground">Configure trigger settings for {application.name}</p>
            </div>
          </div>

          <div className="px-4 lg:px-6 pb-8">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trigger Settings</CardTitle>
                  <CardDescription>Configure general settings for this trigger</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Trigger</Label>
                      <p className="text-sm text-muted-foreground">
                        When disabled, this trigger will not fire any events
                      </p>
                    </div>
                    <Switch defaultChecked={trigger.enabled} />
                  </div>

                  <div className="space-y-2 pt-4">
                    <Label htmlFor="trigger-name">Trigger Name</Label>
                    <Input id="trigger-name" defaultValue={trigger.name} />
                  </div>

                  <div className="space-y-2 pt-2">
                    <Label htmlFor="trigger-description">Description</Label>
                    <Textarea id="trigger-description" defaultValue={trigger.description} rows={3} />
                  </div>

                  <div className="space-y-2 pt-2">
                    <Label htmlFor="trigger-type">Trigger Type</Label>
                    <Select defaultValue="event">
                      <SelectTrigger id="trigger-type">
                        <SelectValue placeholder="Select trigger type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="event">Event Based</SelectItem>
                        <SelectItem value="schedule">Scheduled</SelectItem>
                        <SelectItem value="webhook">Webhook</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Event Configuration</CardTitle>
                  <CardDescription>Configure when this trigger should fire</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-name">Event Name</Label>
                    <Input id="event-name" defaultValue="user.registered" />
                    <p className="text-sm text-muted-foreground">The name of the event that will trigger this action</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <Label htmlFor="event-condition">Condition (Optional)</Label>
                    <Textarea id="event-condition" placeholder="e.g., user.role === 'admin'" rows={3} />
                    <p className="text-sm text-muted-foreground">
                      JavaScript condition that must be true for the trigger to fire
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5" />
                    Custom Code
                  </CardTitle>
                  <CardDescription>Add custom code to run when this trigger fires</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="custom-code">Custom Code</Label>
                    <div className="relative">
                      <textarea
                        id="custom-code"
                        className="font-mono w-full min-h-[200px] rounded-md border border-input bg-background px-3 py-2"
                        defaultValue={`// This code runs when the trigger fires
// event contains the event data
module.exports = async function(event, context) {
  // Your code here
  console.log('Trigger fired with event:', event);
  
  // Return data to pass to actions
  return {
    userId: event.userId,
    timestamp: new Date().toISOString()
  };
}`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Write custom JavaScript code that will execute when this trigger fires
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
