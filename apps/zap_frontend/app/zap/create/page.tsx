"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import { appsApi, zapApi } from "@/lib/api"
import { App, Trigger, Action, Zap } from "@/lib/types"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function CreateZapPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [step, setStep] = useState(1)
  const [apps, setApps] = useState<App[]>([])
  const [triggers, setTriggers] = useState<Trigger[]>([])
  const [actions, setActions] = useState<Action[]>([])
  const [selectedApp, setSelectedApp] = useState<string>("")
  const [selectedTrigger, setSelectedTrigger] = useState<string>("")
  const [selectedActions, setSelectedActions] = useState<string[]>([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }
    loadApps()
  }, [user, router])

  const loadApps = async () => {
    try {
      const response = await appsApi.getApps()
      if (response.code) {
        setApps(response.data || [])
      }
    } catch (err) {
      setError("Failed to load apps")
    }
  }

  const loadTriggers = async (appId: string) => {
    try {
      const response = await appsApi.getAppTriggers(appId)
      if (response.code) {
        setTriggers(response.data || [])
      }
    } catch (err) {
      setError("Failed to load triggers")
    }
  }

  const loadActions = async (appId: string) => {
    try {
      const response = await appsApi.getAppActions(appId)
      if (response.code) {
        setActions(response.data || [])
      }
    } catch (err) {
      setError("Failed to load actions")
    }
  }

  const handleAppSelect = (appId: string) => {
    setSelectedApp(appId)
    setSelectedTrigger("")
    setSelectedActions([])
    loadTriggers(appId)
    loadActions(appId)
  }

  const handleCreateZap = async () => {
    if (!selectedTrigger || selectedActions.length === 0) {
      setError("Please select a trigger and at least one action")
      return
    }

    setLoading(true)
    try {
      const response = await zapApi.createZap({
        name,
        description,
        triggerId: selectedTrigger,
        actionIds: selectedActions,
        isActive: true,
        status: 'active',
        runCount: 0,
        trigger: {
          name: triggers.find((t) => t.id === selectedTrigger)?.name || '',
          type: triggers.find((t) => t.id === selectedTrigger)?.type || '',
        },
        actions: selectedActions.map((actionId) => {
          const action = actions.find((a) => a.id === actionId)
          return {
            name: action?.name || '',
            type: action?.type || '',
          }
        }),
      })

      if (response.code) {
        router.push("/dashboard")
      } else {
        setError(response.error || "Failed to create zap")
      }
    } catch (err) {
      setError("Failed to create zap")
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Choose an App</CardTitle>
              <CardDescription>Select the app you want to connect</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {apps.map((app) => (
                  <Button
                    key={app.id}
                    variant={selectedApp === app.id ? "default" : "outline"}
                    className="h-auto p-4 flex flex-col items-start"
                    onClick={() => handleAppSelect(app.id)}
                  >
                    <div className="text-2xl mb-2">{app.icon}</div>
                    <div className="font-medium">{app.name}</div>
                    <div className="text-sm text-gray-500">{app.description}</div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Configure Trigger</CardTitle>
              <CardDescription>What will start your zap?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select value={selectedTrigger} onValueChange={setSelectedTrigger}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a trigger" />
                  </SelectTrigger>
                  <SelectContent>
                    {triggers.map((trigger) => (
                      <SelectItem key={trigger.id} value={trigger.id}>
                        {trigger.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedTrigger && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Trigger Details</h4>
                    <p className="text-sm text-gray-500">
                      {triggers.find((t) => t.id === selectedTrigger)?.description}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Configure Actions</CardTitle>
              <CardDescription>What should happen when your trigger fires?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {actions.map((action) => (
                  <div
                    key={action.id}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      selectedActions.includes(action.id)
                        ? "border-purple-500 bg-purple-50"
                        : "hover:border-gray-300"
                    }`}
                    onClick={() => {
                      setSelectedActions((prev) =>
                        prev.includes(action.id)
                          ? prev.filter((id) => id !== action.id)
                          : [...prev, action.id]
                      )
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{action.name}</h4>
                        <p className="text-sm text-gray-500">{action.description}</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={selectedActions.includes(action.id)}
                        onChange={() => {}}
                        className="h-4 w-4 text-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Finalize Your Zap</CardTitle>
              <CardDescription>Give your zap a name and description</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Zap Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Send Slack notification when new email arrives"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe what this zap does"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => (step > 1 ? setStep(step - 1) : router.back())}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold">Create a New Zap</h1>
        <p className="text-gray-600">Step {step} of 4</p>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {renderStep()}

      <div className="mt-8 flex justify-end">
        {step < 4 ? (
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        ) : (
          <Button onClick={handleCreateZap} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              "Create Zap"
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
