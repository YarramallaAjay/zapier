"use client"

import { useState, useCallback, useMemo } from "react"
import { ScrollArea } from "@/components/ui/dashboard/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface App {
  id: string
  name: string
  description: string
  icon: string
  category: string
  isPopular?: boolean
}

interface AppSidebarProps {
  onAppSelect: (appId: string, type: "trigger" | "action") => void
  selectedType: "trigger" | "action" | null
  currentStep: "trigger" | "action" | "test"
}

const popularApps: App[] = [
  {
    id: "gmail",
    name: "Gmail",
    description: "Send and receive emails",
    icon: "📧",
    category: "Communication",
    isPopular: true,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Team communication and collaboration",
    icon: "💬",
    category: "Communication",
    isPopular: true,
  },
  {
    id: "trello",
    name: "Trello",
    description: "Project management and task tracking",
    icon: "📋",
    category: "Productivity",
    isPopular: true,
  },
]

const allApps: App[] = [
  ...popularApps,
  {
    id: "google-calendar",
    name: "Google Calendar",
    description: "Schedule and manage events",
    icon: "📅",
    category: "Productivity",
  },
  {
    id: "github",
    name: "GitHub",
    description: "Code hosting and collaboration",
    icon: "💻",
    category: "Development",
  },
  {
    id: "jira",
    name: "Jira",
    description: "Project and issue tracking",
    icon: "🎯",
    category: "Productivity",
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace",
    icon: "📝",
    category: "Productivity",
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Video conferencing",
    icon: "🎥",
    category: "Communication",
  },
  {
    id: "asana",
    name: "Asana",
    description: "Project management",
    icon: "✅",
    category: "Productivity",
  },
  {
    id: "monday",
    name: "Monday.com",
    description: "Work management platform",
    icon: "📊",
    category: "Productivity",
  },
  {
    id: "clickup",
    name: "ClickUp",
    description: "Project management and productivity",
    icon: "🚀",
    category: "Productivity",
  },
  {
    id: "linear",
    name: "Linear",
    description: "Issue tracking for modern teams",
    icon: "📈",
    category: "Development",
  },
  {
    id: "figma",
    name: "Figma",
    description: "Collaborative design tool",
    icon: "🎨",
    category: "Design",
  },
  {
    id: "miro",
    name: "Miro",
    description: "Online whiteboarding platform",
    icon: "🖼️",
    category: "Design",
  },
  {
    id: "airtable",
    name: "Airtable",
    description: "Spreadsheet-database hybrid",
    icon: "📑",
    category: "Productivity",
  },
  {
    id: "typeform",
    name: "Typeform",
    description: "Interactive forms and surveys",
    icon: "📝",
    category: "Marketing",
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Email marketing platform",
    icon: "📨",
    category: "Marketing",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "CRM and marketing platform",
    icon: "🎯",
    category: "Marketing",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Customer relationship management",
    icon: "👥",
    category: "Sales",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Payment processing",
    icon: "💳",
    category: "Finance",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    description: "Accounting software",
    icon: "💰",
    category: "Finance",
  },
  {
    id: "zendesk",
    name: "Zendesk",
    description: "Customer service platform",
    icon: "🎯",
    category: "Support",
  },
  {
    id: "intercom",
    name: "Intercom",
    description: "Customer messaging platform",
    icon: "💬",
    category: "Support",
  },
]

export function AppSidebar({ onAppSelect, selectedType, currentStep }: AppSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  const handleCategorySelect = useCallback((category: string | null) => {
    setSelectedCategory(category)
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allApps.map((app) => app.category)))
    return uniqueCategories
  }, [])

  const filteredApps = useMemo(() => {
    return allApps.filter((app) => {
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || app.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const handleAppClick = useCallback((appId: string) => {
    if (currentStep === "trigger") {
      onAppSelect(appId, "trigger")
    } else if (currentStep === "action") {
      onAppSelect(appId, "action")
    }
  }, [currentStep, onAppSelect])

  return (
    <div className="flex flex-col h-full border rounded-lg">
      <div className="p-4 border-b">
        <div className="relative">
          <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search apps..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-8"
          />
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategorySelect(null)}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {searchQuery === "" && selectedCategory === null && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Popular Apps</h3>
                <div className="grid grid-cols-1 gap-2">
                  {popularApps.map((app) => (
                    <motion.button
                      key={app.id}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded-lg border text-left hover:bg-accent transition-colors",
                        selectedType === "trigger" && "cursor-pointer",
                        selectedType === "action" && "cursor-pointer"
                      )}
                      onClick={() => handleAppClick(app.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl">{app.icon}</span>
                      <div>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-xs text-muted-foreground">{app.description}</div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium mb-2">
                {searchQuery ? "Search Results" : "All Apps"}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                <AnimatePresence>
                  {filteredApps.map((app) => (
                    <motion.button
                      key={app.id}
                      className={cn(
                        "flex items-center gap-2 p-2 rounded-lg border text-left hover:bg-accent transition-colors",
                        selectedType === "trigger" && "cursor-pointer",
                        selectedType === "action" && "cursor-pointer"
                      )}
                      onClick={() => handleAppClick(app.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl">{app.icon}</span>
                      <div>
                        <div className="font-medium">{app.name}</div>
                        <div className="text-xs text-muted-foreground">{app.description}</div>
                      </div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
