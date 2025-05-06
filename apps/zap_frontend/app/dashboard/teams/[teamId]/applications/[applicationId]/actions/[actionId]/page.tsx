import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/dashboard/ui/switch"
import { ArrowLeftIcon, PlayIcon, CodeIcon, BoltIcon } from "lucide-react"
import Link from "next/link"

import data from "@/app/dashboard/data.json"

export default function ActionConfigPage({
  params,
}: {
  params: { teamId: string; applicationId: string; actionId: string }
}) {
  const team = data.teams.find((team) => team.id === params.teamId)
  if (!team) {
    notFound()
  }

  const application = team.applications.find((app) => app.id === params.applicationId)
  if (!application) {
    notFound()
  }

  const action = application.actions.find((action) => action.id === params.actionId)
  if (!action) {
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
                <PlayIcon className="h-5 w-5" />
                {action.name} Configuration
              </h1>
              <p className="text-muted-foreground">Configure action settings for {application.name}</p>
            </div>
          </div>

          <div className="px-4 lg:px-6 pb-8">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Action Settings</CardTitle>
                  <CardDescription>Configure general settings for this action</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Action</Label>
                      <p className="text-sm text-muted-foreground">When disabled, this action will not be executed</p>
                    </div>
                    <Switch defaultChecked={action.enabled} />
                  </div>

                  <div className="space-y-2 pt-4">
                    <Label htmlFor="action-name">Action Name</Label>
                    <Input id="action-name" defaultValue={action.name} />
                  </div>

                  <div className="space-y-2 pt-2">
                    <Label htmlFor="action-description">Description</Label>
                    <Textarea id="action-description" defaultValue={action.description} rows={3} />
                  </div>

                  <div className="space-y-2 pt-2">
                    <Label htmlFor="action-type">Action Type</Label>
                    <Select defaultValue="function">
                      <SelectTrigger id="action-type">
                        <SelectValue placeholder="Select action type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="function">Function</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="webhook">Webhook</SelectItem>
                        <SelectItem value="database">Database Operation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BoltIcon className="h-5 w-5" />
                    Trigger Connections
                  </CardTitle>
                  <CardDescription>Configure which triggers will execute this action</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.triggers.map((trigger) => (
                      <div key={trigger.id} className="flex items-center space-x-2">
                        <Switch id={`trigger-${trigger.id}`} defaultChecked={trigger.id === "trigger-1"} />
                        <Label htmlFor={`trigger-${trigger.id}`} className="flex-1">
                          {trigger.name}
                        </Label>
                      </div>
                    ))}
                    {application.triggers.length === 0 && (
                      <p className="text-muted-foreground">No triggers available. Create a trigger first.</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CodeIcon className="h-5 w-5" />
                    Custom Code
                  </CardTitle>
                  <CardDescription>Add custom code to run when this action is executed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="custom-code">Custom Code</Label>
                    <div className="relative">
                      <textarea
                        id="custom-code"
                        className="font-mono w-full min-h-[200px] rounded-md border border-input bg-background px-3 py-2"
                        defaultValue={`// This code runs when the action is executed
// data contains the data from the trigger
module.exports = async function(data, context) {
  // Your code here
  console.log('Action executed with data:', data);
  
  // Example: Send welcome email
  if (data.userId) {
    await context.services.email.send({
      to: data.email,
      subject: 'Welcome to our platform!',
      body: 'Thank you for registering with us.'
    });
  }
  
  return {
    success: true,
    message: 'Action completed successfully'
  };
}`}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Write custom JavaScript code that will execute when this action is triggered
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
