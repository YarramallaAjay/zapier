"use client"

import { useState, useEffect } from "react"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/dashboard/ui/switch"
import { Badge } from "@/components/ui/badge"
import { useNotifications } from "@/components/ui/notification-provider"
import { ZapCardSkeleton } from "@/components/ui/dashboard/loading-skeleton"
import { motion } from "framer-motion"
import {
  ArrowLeftIcon,
  PlayIcon,
  PauseIcon,
  ClockIcon,
  HistoryIcon,
  EditIcon,
  TrashIcon,
  CopyIcon,
  AlertCircleIcon,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

import data from "../../data.json"

// Sample zap data
const zapsData = [
  {
    id: "zap-1",
    name: "New Gmail to Slack Notification",
    status: "active",
    lastRun: "2024-06-30T15:30:00Z",
    trigger: {
      app: "Gmail",
      event: "New Email",
      config: {
        from: "",
        subject: "important",
        "has-attachment": true,
      },
    },
    action: {
      app: "Slack",
      event: "Send Message",
      config: {
        channel: "general",
        message: "New important email received with attachment: {{subject}}",
        "as-bot": true,
      },
    },
    runCount: 245,
    history: [
      { id: "run-1", status: "success", timestamp: "2024-06-30T15:30:00Z", duration: "1.2s" },
      { id: "run-2", status: "success", timestamp: "2024-06-30T14:15:00Z", duration: "1.5s" },
      {
        id: "run-3",
        status: "error",
        timestamp: "2024-06-30T12:45:00Z",
        duration: "0.8s",
        error: "Authentication failed",
      },
      { id: "run-4", status: "success", timestamp: "2024-06-30T10:20:00Z", duration: "1.3s" },
      { id: "run-5", status: "success", timestamp: "2024-06-30T08:05:00Z", duration: "1.1s" },
    ],
  },
  {
    id: "zap-2",
    name: "Twitter Mentions to Notion Database",
    status: "inactive",
    lastRun: "2024-06-28T09:15:00Z",
    trigger: {
      app: "Twitter",
      event: "New Mention",
      config: {
        username: "@mycompany",
      },
    },
    action: {
      app: "Notion",
      event: "Create Database Item",
      config: {
        database: "Social Mentions",
        properties: {
          Platform: "Twitter",
          Content: "{{text}}",
          Author: "{{user.name}}",
          Date: "{{created_at}}",
        },
      },
    },
    runCount: 78,
    history: [
      { id: "run-1", status: "success", timestamp: "2024-06-28T09:15:00Z", duration: "2.3s" },
      { id: "run-2", status: "success", timestamp: "2024-06-27T16:40:00Z", duration: "2.1s" },
      { id: "run-3", status: "success", timestamp: "2024-06-27T11:25:00Z", duration: "2.2s" },
    ],
  },
]

export default function ZapDetailPage({ params }: { params: { zapId: string } }) {
  const { showImportantNotification } = useNotifications()
  const [zap, setZap] = useState<(typeof zapsData)[0] | null>(null)
  const [status, setStatus] = useState<"active" | "inactive">("active")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      const foundZap = zapsData.find((z) => z.id === params.zapId)
      if (foundZap) {
        setZap(foundZap)
        setStatus(foundZap.status as "active" | "inactive")
      }
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [params.zapId])

  useEffect(() => {
    // Simulate a failed zap run after 5 seconds
    const timer = setTimeout(() => {
      if (zap && status === "active") {
        showImportantNotification({
          title: "Zap Run Failed",
          message: `Your zap "${zap.name}" failed to run due to an authentication error.`,
          type: "error",
          link: `/dashboard/zaps/${zap.id}?tab=history`,
        })
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [zap, status, showImportantNotification])

  if (!isLoading && !zap) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  const getTimeSince = (dateString: string) => {
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
  }

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="border-b">
            <div className="flex items-center gap-4 px-4 py-4 lg:px-6">
              <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/zaps">
                  <ArrowLeftIcon className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Link>
              </Button>
              {isLoading ? (
                <div className="flex-1">
                  <div className="h-7 w-48 bg-muted animate-pulse rounded"></div>
                  <div className="h-5 w-32 bg-muted animate-pulse rounded mt-1"></div>
                </div>
              ) : (
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-2xl font-bold">{zap?.name}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <ClockIcon className="h-3.5 w-3.5" />
                      <span>Last run {getTimeSince(zap?.lastRun || new Date().toISOString())}</span>
                    </div>
                    <Badge
                      variant={status === "active" ? "default" : "secondary"}
                      className="flex items-center gap-1.5 transition-colors duration-300"
                    >
                      <div className={`h-2 w-2 rounded-full ${status === "active" ? "bg-green-500" : "bg-red-500"}`} />
                      {status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </motion.div>
              )}
              <div className="flex items-center gap-2">
                <Button
                  variant={status === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatus(status === "active" ? "inactive" : "active")}
                  className="transition-all duration-200"
                  disabled={isLoading}
                >
                  {status === "active" ? (
                    <>
                      <PauseIcon className="mr-2 h-4 w-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <PlayIcon className="mr-2 h-4 w-4" />
                      Enable
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm" asChild disabled={isLoading}>
                  <Link href={`/dashboard/zaps/${params.zapId}/edit`}>
                    <EditIcon className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4 lg:p-6">
            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2">
                <ZapCardSkeleton />
                <ZapCardSkeleton />
                <ZapCardSkeleton className="md:col-span-2" />
              </div>
            ) : (
              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="history">Run History</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="overview">
                    <div className="grid gap-6 md:grid-cols-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <span className="text-2xl">📧</span>
                              Trigger: {zap?.trigger.app}
                            </CardTitle>
                            <CardDescription>{zap?.trigger.event}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {Object.entries(zap?.trigger.config || {}).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="font-medium capitalize">{key.replace(/-/g, " ")}</span>
                                  <span className="text-muted-foreground">
                                    {typeof value === "boolean"
                                      ? value
                                        ? "Yes"
                                        : "No"
                                      : value.toString() || "(empty)"}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/dashboard/zaps/${params.zapId}/edit?step=trigger`}>Edit Trigger</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <span className="text-2xl">💬</span>
                              Action: {zap?.action.app}
                            </CardTitle>
                            <CardDescription>{zap?.action.event}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {Object.entries(zap?.action.config || {}).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="font-medium capitalize">{key.replace(/-/g, " ")}</span>
                                  <span className="text-muted-foreground">
                                    {typeof value === "boolean"
                                      ? value
                                        ? "Yes"
                                        : "No"
                                      : typeof value === "object"
                                        ? "Complex Object"
                                        : value.toString() || "(empty)"}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/dashboard/zaps/${params.zapId}/edit?step=action`}>Edit Action</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="md:col-span-2"
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <HistoryIcon className="h-5 w-5" />
                              Recent Activity
                            </CardTitle>
                            <CardDescription>Recent runs of this Zap</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              {zap?.history.slice(0, 3).map((run) => (
                                <motion.div
                                  key={run.id}
                                  className="flex items-center justify-between border-b pb-3"
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="flex items-center gap-3">
                                    {run.status === "success" ? (
                                      <div className="h-2 w-2 rounded-full bg-green-500" />
                                    ) : (
                                      <div className="h-2 w-2 rounded-full bg-red-500" />
                                    )}
                                    <div>
                                      <div className="font-medium">
                                        {run.status === "success" ? "Successful run" : "Failed run"}
                                      </div>
                                      <div className="text-sm text-muted-foreground">
                                        {formatDate(run.timestamp)} • Duration: {run.duration}
                                      </div>
                                    </div>
                                  </div>
                                  {run.status === "error" && (
                                    <div className="flex items-center text-sm text-red-500">
                                      <AlertCircleIcon className="mr-1 h-4 w-4" />
                                      {run.error}
                                    </div>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => document.querySelector('[data-value="history"]')?.click()}
                            >
                              View All Activity
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>Run History</CardTitle>
                          <CardDescription>View all runs of this Zap</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {zap?.history.map((run, index) => (
                              <motion.div
                                key={run.id}
                                className="flex items-center justify-between border-b pb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <div className="flex items-center gap-3">
                                  {run.status === "success" ? (
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                  ) : (
                                    <div className="h-2 w-2 rounded-full bg-red-500" />
                                  )}
                                  <div>
                                    <div className="font-medium">
                                      {run.status === "success" ? "Successful run" : "Failed run"}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {formatDate(run.timestamp)} • Duration: {run.duration}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  {run.status === "error" && (
                                    <div className="mr-4 flex items-center text-sm text-red-500">
                                      <AlertCircleIcon className="mr-1 h-4 w-4" />
                                      {run.error}
                                    </div>
                                  )}
                                  <Button variant="outline" size="sm">
                                    View Details
                                  </Button>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="settings">
                    <div className="grid gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle>Zap Settings</CardTitle>
                            <CardDescription>Configure general settings for this Zap</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Zap Status</h3>
                                <p className="text-sm text-muted-foreground">Enable or disable this Zap</p>
                              </div>
                              <Switch
                                checked={status === "active"}
                                onCheckedChange={(checked) => setStatus(checked ? "active" : "inactive")}
                              />
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Error Notifications</h3>
                                <p className="text-sm text-muted-foreground">Get notified when this Zap fails</p>
                              </div>
                              <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Run Limit</h3>
                                <p className="text-sm text-muted-foreground">
                                  Limit the number of times this Zap can run
                                </p>
                              </div>
                              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                                <option value="unlimited">Unlimited</option>
                                <option value="100">100 runs</option>
                                <option value="500">500 runs</option>
                                <option value="1000">1000 runs</option>
                              </select>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-destructive">Danger Zone</CardTitle>
                            <CardDescription>Irreversible actions for this Zap</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium">Duplicate Zap</h3>
                                <p className="text-sm text-muted-foreground">Create a copy of this Zap</p>
                              </div>
                              <Button variant="outline" size="sm">
                                <CopyIcon className="mr-2 h-4 w-4" />
                                Duplicate
                              </Button>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-medium text-destructive">Delete Zap</h3>
                                <p className="text-sm text-muted-foreground">Permanently delete this Zap</p>
                              </div>
                              <Button variant="destructive" size="sm">
                                <TrashIcon className="mr-2 h-4 w-4" />
                                Delete
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </TabsContent>
                </motion.div>
              </Tabs>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
