"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/dashboard/ui/switch"
import { Loader2Icon } from "lucide-react"
import { CheckIcon } from "lucide-react"

// Sample app events data
const appEventsData = {
  gmail: {
    name: "Gmail",
    icon: "📧",
    triggers: [
      { id: "new-email", name: "New Email", description: "Triggers when a new email is received" },
      {
        id: "new-labeled-email",
        name: "New Labeled Email",
        description: "Triggers when a new email with a specific label is received",
      },
      {
        id: "new-attachment",
        name: "New Attachment",
        description: "Triggers when a new email with an attachment is received",
      },
    ],
    actions: [
      { id: "send-email", name: "Send Email", description: "Sends an email" },
      { id: "create-draft", name: "Create Draft", description: "Creates a draft email" },
      { id: "add-label", name: "Add Label", description: "Adds a label to an email" },
    ],
    fields: {
      "new-email": [
        { id: "from", name: "From", type: "text", required: false, placeholder: "Filter by sender email" },
        {
          id: "subject",
          name: "Subject Contains",
          type: "text",
          required: false,
          placeholder: "Filter by subject text",
        },
        { id: "has-attachment", name: "Has Attachment", type: "boolean", required: false },
      ],
      "new-labeled-email": [
        {
          id: "label",
          name: "Label",
          type: "select",
          required: true,
          options: ["Important", "Work", "Personal", "Updates"],
        },
        { id: "from", name: "From", type: "text", required: false, placeholder: "Filter by sender email" },
      ],
      "send-email": [
        { id: "to", name: "To", type: "text", required: true, placeholder: "Recipient email address" },
        { id: "subject", name: "Subject", type: "text", required: true, placeholder: "Email subject" },
        { id: "body", name: "Body", type: "textarea", required: true, placeholder: "Email body" },
        { id: "cc", name: "CC", type: "text", required: false, placeholder: "CC email addresses" },
        { id: "bcc", name: "BCC", type: "text", required: false, placeholder: "BCC email addresses" },
      ],
      "create-draft": [
        { id: "to", name: "To", type: "text", required: true, placeholder: "Recipient email address" },
        { id: "subject", name: "Subject", type: "text", required: true, placeholder: "Email subject" },
        { id: "body", name: "Body", type: "textarea", required: true, placeholder: "Email body" },
      ],
    },
  },
  slack: {
    name: "Slack",
    icon: "💬",
    triggers: [
      { id: "new-message", name: "New Message", description: "Triggers when a new message is posted to a channel" },
      { id: "new-channel", name: "New Channel", description: "Triggers when a new channel is created" },
      { id: "new-mention", name: "New Mention", description: "Triggers when you are mentioned in a message" },
    ],
    actions: [
      { id: "send-message", name: "Send Message", description: "Sends a message to a channel" },
      { id: "create-channel", name: "Create Channel", description: "Creates a new channel" },
      { id: "upload-file", name: "Upload File", description: "Uploads a file to a channel" },
    ],
    fields: {
      "new-message": [
        {
          id: "channel",
          name: "Channel",
          type: "select",
          required: true,
          options: ["general", "random", "development"],
        },
        {
          id: "contains",
          name: "Message Contains",
          type: "text",
          required: false,
          placeholder: "Filter by message content",
        },
      ],
      "send-message": [
        {
          id: "channel",
          name: "Channel",
          type: "select",
          required: true,
          options: ["general", "random", "development"],
        },
        { id: "message", name: "Message", type: "textarea", required: true, placeholder: "Message text" },
        { id: "as-bot", name: "Send as Bot", type: "boolean", required: false },
      ],
    },
  },
  "google-sheets": {
    name: "Google Sheets",
    icon: "📊",
    triggers: [
      { id: "new-row", name: "New Row", description: "Triggers when a new row is added to a spreadsheet" },
      { id: "updated-row", name: "Updated Row", description: "Triggers when a row is updated in a spreadsheet" },
    ],
    actions: [
      { id: "add-row", name: "Add Row", description: "Adds a row to a spreadsheet" },
      { id: "update-row", name: "Update Row", description: "Updates a row in a spreadsheet" },
    ],
    fields: {
      "new-row": [
        {
          id: "spreadsheet",
          name: "Spreadsheet",
          type: "select",
          required: true,
          options: ["Sales Data", "Marketing Metrics", "Customer List"],
        },
        { id: "worksheet", name: "Worksheet", type: "select", required: true, options: ["Sheet1", "Sheet2", "Sheet3"] },
      ],
      "add-row": [
        {
          id: "spreadsheet",
          name: "Spreadsheet",
          type: "select",
          required: true,
          options: ["Sales Data", "Marketing Metrics", "Customer List"],
        },
        { id: "worksheet", name: "Worksheet", type: "select", required: true, options: ["Sheet1", "Sheet2", "Sheet3"] },
        { id: "values", name: "Row Values", type: "key-value", required: true },
      ],
    },
  },
}

interface ZapBuilderProps {
  type: "trigger" | "action"
  selectedApp: string
  selectedEvent: string
  onEventSelect: (eventId: string) => void
  onConfigUpdate: (config: any) => void
  config: Record<string, any>
}

export function ZapBuilder({ type, selectedApp, selectedEvent, onEventSelect, onConfigUpdate, config }: ZapBuilderProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [localConfig, setLocalConfig] = useState<Record<string, any>>(config || {})

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update local config when prop changes
  useEffect(() => {
    setLocalConfig(config || {})
  }, [config])

  // Update parent component when config changes
  useEffect(() => {
    onConfigUpdate(localConfig)
  }, [localConfig, onConfigUpdate])

  const handleConfigChange = useCallback((fieldId: string, value: any) => {
    setLocalConfig(prev => ({
      ...prev,
      [fieldId]: value,
    }))
  }, [])

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <Loader2Icon className="h-8 w-8 animate-spin mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!selectedApp) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <div className="text-6xl mb-4">👈</div>
        <h3 className="text-xl font-medium mb-2">Select an App</h3>
        <p className="text-muted-foreground">
          Choose an app from the sidebar to {type === "trigger" ? "trigger" : "perform"} your Zap
        </p>
      </div>
    )
  }

  const appData = appEventsData[selectedApp as keyof typeof appEventsData]

  if (!appData) {
    return (
      <div className="text-center p-12">
        <p>App data not found for {selectedApp}</p>
      </div>
    )
  }

  const events = type === "trigger" ? appData.triggers : appData.actions
  const fields = selectedEvent ? appData.fields[selectedEvent] : []

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Select an Event</h3>
        <div className="grid gap-2">
          {events.map((event) => (
            <button
              key={event.id}
              onClick={() => onEventSelect(event.id)}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                selectedEvent === event.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{event.icon}</div>
                <div>
                  <div className="font-medium">{event.name}</div>
                  <div className="text-sm text-muted-foreground">{event.description}</div>
                </div>
              </div>
              {selectedEvent === event.id && <CheckIcon className="h-5 w-5 text-primary" />}
            </button>
          ))}
        </div>
      </div>

      {selectedEvent && fields.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-2">Configure Event</h3>
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id}>
                <Label htmlFor={field.id}>{field.label}</Label>
                {field.type === "text" && (
                  <Input
                    id={field.id}
                    value={localConfig[field.id] || ""}
                    onChange={(e) => handleConfigChange(field.id, e.target.value)}
                    placeholder={field.placeholder}
                  />
                )}
                {field.type === "select" && (
                  <select
                    id={field.id}
                    value={localConfig[field.id] || ""}
                    onChange={(e) => handleConfigChange(field.id, e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select an option</option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
                {field.help && <p className="text-sm text-muted-foreground mt-1">{field.help}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
