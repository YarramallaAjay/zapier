import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchIcon, PlusIcon } from "lucide-react"
import Link from "next/link"

import data from "../../data.json"

// Sample zap templates
const zapTemplates = [
  {
    id: "template-1",
    name: "Gmail to Slack Notifications",
    description: "Get Slack notifications for new emails in Gmail",
    trigger: {
      app: "Gmail",
      event: "New Email",
    },
    action: {
      app: "Slack",
      event: "Send Message",
    },
    popularity: "Popular",
    category: "Communication",
  },
  {
    id: "template-2",
    name: "Twitter Mentions to Notion",
    description: "Save Twitter mentions to a Notion database",
    trigger: {
      app: "Twitter",
      event: "New Mention",
    },
    action: {
      app: "Notion",
      event: "Create Database Item",
    },
    popularity: "Trending",
    category: "Social Media",
  },
  {
    id: "template-3",
    name: "Google Calendar to Trello",
    description: "Create Trello cards for new Google Calendar events",
    trigger: {
      app: "Google Calendar",
      event: "New Event",
    },
    action: {
      app: "Trello",
      event: "Create Card",
    },
    popularity: "Popular",
    category: "Productivity",
  },
  {
    id: "template-4",
    name: "Shopify Orders to Google Sheets",
    description: "Log new Shopify orders in a Google Sheets spreadsheet",
    trigger: {
      app: "Shopify",
      event: "New Order",
    },
    action: {
      app: "Google Sheets",
      event: "Add Row",
    },
    popularity: "Popular",
    category: "E-commerce",
  },
  {
    id: "template-5",
    name: "Instagram Posts to Facebook Page",
    description: "Automatically post Instagram photos to a Facebook page",
    trigger: {
      app: "Instagram",
      event: "New Post",
    },
    action: {
      app: "Facebook",
      event: "Create Page Post",
    },
    popularity: "Trending",
    category: "Social Media",
  },
  {
    id: "template-6",
    name: "RSS Feed to Email Digest",
    description: "Send a daily email digest of new RSS feed items",
    trigger: {
      app: "RSS",
      event: "New Item",
    },
    action: {
      app: "Email",
      event: "Send Email",
    },
    popularity: "New",
    category: "Content",
  },
]

export default function ZapTemplatesPage() {
  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">Zap Templates</h1>
                  <p className="text-muted-foreground">Pre-built Zaps to help you get started quickly.</p>
                </div>
                <Button asChild>
                  <Link href="/dashboard/zaps/create">
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Create Custom Zap
                  </Link>
                </Button>
              </div>
            </div>

            <div className="px-4 lg:px-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search templates..."
                    className="w-full bg-background pl-8 md:max-w-sm"
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="all">All Categories</option>
                    <option value="communication">Communication</option>
                    <option value="social-media">Social Media</option>
                    <option value="productivity">Productivity</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="content">Content</option>
                  </select>
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="popular">Popular First</option>
                    <option value="newest">Newest First</option>
                    <option value="a-z">A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="px-4 lg:px-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {zapTemplates.map((template) => (
                  <Card key={template.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        {template.popularity && (
                          <div
                            className={`px-2 py-1 text-xs rounded-full ${
                              template.popularity === "Popular"
                                ? "bg-green-100 text-green-800"
                                : template.popularity === "Trending"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {template.popularity}
                          </div>
                        )}
                      </div>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center">
                        <span className="font-medium">{template.trigger.app}</span>
                        <span className="mx-2">→</span>
                        <span className="font-medium">{template.action.app}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {template.trigger.event} → {template.action.event}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/dashboard/zaps/create?template=${template.id}`}>Use Template</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
