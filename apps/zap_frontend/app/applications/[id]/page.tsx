"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Key, Webhook, Zap, Plus, Copy, Check } from "lucide-react"
import Link from "next/link"

// Mock application data - would be fetched from backend
const APPLICATION = {
  id: "app-1",
  name: "NFT Marketplace",
  description: "Integration for NFT marketplace",
  team: "Web3 Team",
  createdAt: "2023-03-10T14:30:00Z",
  apiKey: "zap_test_1234567890abcdef",
  webhookUrl: "https://api.zapper.io/webhook/app-1",
  triggers: [
    { id: "trigger-1", name: "NFT Sale", description: "Triggered when an NFT is sold" },
    { id: "trigger-2", name: "NFT Listing", description: "Triggered when an NFT is listed" },
  ],
  actions: [
    { id: "action-1", name: "Create Listing", description: "Create a new NFT listing" },
    { id: "action-2", name: "Cancel Listing", description: "Cancel an existing NFT listing" },
  ],
}

export default function ApplicationPage() {
  const params = useParams()
  const [application, setApplication] = useState<typeof APPLICATION | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("authentication")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch application details
    const fetchApplication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setApplication(APPLICATION)
      setIsLoading(false)
    }

    fetchApplication()
  }, [params.id])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (isLoading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Loading application details...</p>
        </div>
      </div>
    )
  }

  if (!application) {
    return (
      <div className="container py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Application Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The application you're looking for doesn't exist or you don't have access to it.
          </p>
          <Button asChild>
            <Link href="/applications">Back to Applications</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{application.name}</h1>
        <p className="text-muted-foreground">{application.description}</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="triggers">Triggers</TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="authentication" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                API Keys
              </CardTitle>
              <CardDescription>Use these keys to authenticate your application with Zapper</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex">
                  <Input id="api-key" value={application.apiKey} readOnly className="font-mono" />
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-2"
                    onClick={() => copyToClipboard(application.apiKey)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Keep this key secret. Do not share it in client-side code or expose it publicly.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <div className="flex">
                  <Input id="webhook-url" value={application.webhookUrl} readOnly className="font-mono" />
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-2"
                    onClick={() => copyToClipboard(application.webhookUrl)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Use this URL to receive webhook events from Zapper.</p>
              </div>

              <div className="pt-4">
                <Button variant="outline">Regenerate API Key</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5" />
                Webhook Configuration
              </CardTitle>
              <CardDescription>Configure how Zapper communicates with your application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-secret">Webhook Secret</Label>
                <div className="flex">
                  <Input id="webhook-secret" value="••••••••••••••••" readOnly className="font-mono" />
                  <Button variant="outline" size="icon" className="ml-2">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Use this secret to verify webhook requests from Zapper.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-events">Webhook Events</Label>
                <div className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <input type="checkbox" id="event-trigger" className="h-4 w-4" checked />
                    <Label htmlFor="event-trigger" className="text-sm font-normal">
                      Trigger Events
                    </Label>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <input type="checkbox" id="event-action" className="h-4 w-4" checked />
                    <Label htmlFor="event-action" className="text-sm font-normal">
                      Action Events
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="event-error" className="h-4 w-4" checked />
                    <Label htmlFor="event-error" className="text-sm font-normal">
                      Error Events
                    </Label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button>Save Webhook Configuration</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="triggers" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Webhook className="h-5 w-5" />
                Available Triggers
              </CardTitle>
              <CardDescription>Triggers that your application can provide to Zapper</CardDescription>
            </CardHeader>
            <CardContent>
              {application.triggers.length === 0 ? (
                <div className="flex flex-col items-center py-6">
                  <p className="text-muted-foreground mb-4">No triggers configured for this application.</p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Trigger
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {application.triggers.map((trigger) => (
                    <div key={trigger.id} className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{trigger.name}</h3>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{trigger.description}</p>
                      <div className="bg-muted p-3 rounded-md">
                        <code className="text-xs">
                          {`{
  "trigger_id": "${trigger.id}",
  "name": "${trigger.name}",
  "event_data": { ... }
}`}
                        </code>
                      </div>
                    </div>
                  ))}

                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Trigger
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actions" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Available Actions
              </CardTitle>
              <CardDescription>Actions that Zapper can perform with your application</CardDescription>
            </CardHeader>
            <CardContent>
              {application.actions.length === 0 ? (
                <div className="flex flex-col items-center py-6">
                  <p className="text-muted-foreground mb-4">No actions configured for this application.</p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Action
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {application.actions.map((action) => (
                    <div key={action.id} className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{action.name}</h3>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
                      <div className="bg-muted p-3 rounded-md">
                        <code className="text-xs">
                          {`{
  "action_id": "${action.id}",
  "name": "${action.name}",
  "input_schema": { ... },
  "output_schema": { ... }
}`}
                        </code>
                      </div>
                    </div>
                  ))}

                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Action
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Action Documentation</CardTitle>
              <CardDescription>Provide documentation for your application's actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="action-docs">Documentation</Label>
                <Textarea
                  id="action-docs"
                  placeholder="Enter markdown documentation for your actions..."
                  className="min-h-[200px]"
                />
                <p className="text-sm text-muted-foreground">Markdown formatting is supported.</p>
              </div>

              <div className="pt-4">
                <Button>Save Documentation</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
