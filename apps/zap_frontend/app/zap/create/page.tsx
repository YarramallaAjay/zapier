"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Save, Zap } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Mock data - would be fetched from backend
const TRIGGERS = [
  { id: "webhook", name: "Webhook", description: "Trigger when a webhook is received" },
  { id: "schedule", name: "Schedule", description: "Trigger on a schedule" },
  { id: "blockchain-event", name: "Blockchain Event", description: "Trigger on blockchain events" },
  { id: "wallet-change", name: "Wallet Change", description: "Trigger when wallet balance changes" },
  { id: "nft-event", name: "NFT Event", description: "Trigger on NFT sales or transfers" },
]

const ACTIONS = [
  { id: "send-transaction", name: "Send Transaction", description: "Send a blockchain transaction" },
  { id: "send-notification", name: "Send Notification", description: "Send a notification via email, SMS, etc." },
  { id: "call-api", name: "Call API", description: "Make an API call to an external service" },
  { id: "update-database", name: "Update Database", description: "Update a database record" },
  { id: "mint-nft", name: "Mint NFT", description: "Mint an NFT" },
]

export default function CreateZapPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [zapName, setZapName] = useState("")
  const [selectedTrigger, setSelectedTrigger] = useState("")
  const [selectedAction, setSelectedAction] = useState("")
  const [activeTab, setActiveTab] = useState("trigger")
  const [isConfigComplete, setIsConfigComplete] = useState(false)

  // Check if configuration is complete
  useEffect(() => {
    setIsConfigComplete(!!zapName && !!selectedTrigger && !!selectedAction)
  }, [zapName, selectedTrigger, selectedAction])

  const handleSaveProgress = async () => {
    setIsLoading(true)

    try {
      // Simulate API call to save progress
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Progress saved",
        description: "Your zap configuration has been saved.",
      })
    } catch (error) {
      console.error("Failed to save progress:", error)
      toast({
        title: "Error",
        description: "Failed to save progress. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleActivateZap = async () => {
    if (!isConfigComplete) {
      toast({
        title: "Incomplete configuration",
        description: "Please complete all required fields before activating your zap.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call to activate zap
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Zap activated",
        description: "Your zap has been successfully activated.",
      })

      // Redirect to dashboard after successful activation
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (error) {
      console.error("Failed to activate zap:", error)
      toast({
        title: "Error",
        description: "Failed to activate zap. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-10">
      <Toaster />
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Create a New Zap</h1>
          <p className="text-muted-foreground">Configure your workflow automation</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Zap Configuration</CardTitle>
            <CardDescription>Name your zap and configure its trigger and actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="zap-name">Zap Name</Label>
              <Input
                id="zap-name"
                placeholder="Enter a name for your zap"
                value={zapName}
                onChange={(e) => setZapName(e.target.value)}
              />
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="trigger">Trigger</TabsTrigger>
                <TabsTrigger value="action">Action</TabsTrigger>
              </TabsList>

              <TabsContent value="trigger" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Select a Trigger</Label>
                  <Select value={selectedTrigger} onValueChange={setSelectedTrigger}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a trigger" />
                    </SelectTrigger>
                    <SelectContent>
                      {TRIGGERS.map((trigger) => (
                        <SelectItem key={trigger.id} value={trigger.id}>
                          {trigger.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedTrigger && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {TRIGGERS.find((t) => t.id === selectedTrigger)?.description}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setActiveTab("action")}>Next: Configure Action</Button>
                </div>
              </TabsContent>

              <TabsContent value="action" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Select an Action</Label>
                  <Select value={selectedAction} onValueChange={setSelectedAction}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an action" />
                    </SelectTrigger>
                    <SelectContent>
                      {ACTIONS.map((action) => (
                        <SelectItem key={action.id} value={action.id}>
                          {action.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedAction && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {ACTIONS.find((a) => a.id === selectedAction)?.description}
                    </p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleSaveProgress} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Progress
                </>
              )}
            </Button>
            <Button onClick={handleActivateZap} disabled={isLoading || !isConfigComplete}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Let Zap
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
