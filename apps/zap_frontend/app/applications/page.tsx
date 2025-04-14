"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Users, AppWindow, Loader2 } from "lucide-react"

// Mock data - would be fetched from backend
const APPLICATIONS = [
  {
    id: "app-1",
    name: "NFT Marketplace",
    description: "Integration for NFT marketplace",
    team: "Web3 Team",
    createdAt: "2023-03-10T14:30:00Z",
  },
  {
    id: "app-2",
    name: "DeFi Dashboard",
    description: "Integration for DeFi protocols",
    team: "Web3 Team",
    createdAt: "2023-02-22T09:15:00Z",
  },
]

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<typeof APPLICATIONS>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasTeam, setHasTeam] = useState(true)
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false)
  const [isCreateAppDialogOpen, setIsCreateAppDialogOpen] = useState(false)
  const [newTeamName, setNewTeamName] = useState("")
  const [newAppName, setNewAppName] = useState("")
  const [newAppDescription, setNewAppDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Simulate API call to fetch applications and team status
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setApplications(APPLICATIONS)
      setHasTeam(true) // Set to false to test the no-team state
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call to create team
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setHasTeam(true)
      setIsCreateTeamDialogOpen(false)
      setNewTeamName("")
    } catch (error) {
      console.error("Failed to create team:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCreateApp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call to create application
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newApp = {
        id: `app-${applications.length + 1}`,
        name: newAppName,
        description: newAppDescription,
        team: "Web3 Team",
        createdAt: new Date().toISOString(),
      }

      setApplications([...applications, newApp])
      setIsCreateAppDialogOpen(false)
      setNewAppName("")
      setNewAppDescription("")
    } catch (error) {
      console.error("Failed to create application:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  if (isLoading) {
    return (
      <div className="container py-10 flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Loading applications...</p>
        </div>
      </div>
    )
  }

  if (!hasTeam) {
    return (
      <div className="container py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Applications</h1>
            <p className="text-muted-foreground">Manage your application integrations</p>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>No Team Found</CardTitle>
            <CardDescription>You need to create or join a team to manage applications</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-6">
            <Users className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Create Your First Team</h3>
            <p className="text-center text-muted-foreground max-w-md mb-6">
              Teams allow you to collaborate with others and manage applications together.
            </p>
            <div className="flex gap-4">
              <Dialog open={isCreateTeamDialogOpen} onOpenChange={setIsCreateTeamDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Team
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <form onSubmit={handleCreateTeam}>
                    <DialogHeader>
                      <DialogTitle>Create a New Team</DialogTitle>
                      <DialogDescription>Create a team to start managing applications</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="team-name">Team Name</Label>
                        <Input
                          id="team-name"
                          placeholder="Enter team name"
                          value={newTeamName}
                          onChange={(e) => setNewTeamName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Creating...
                          </>
                        ) : (
                          "Create Team"
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="outline">Request to Join Team</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Applications</h1>
          <p className="text-muted-foreground">Manage your application integrations</p>
        </div>
        <Dialog open={isCreateAppDialogOpen} onOpenChange={setIsCreateAppDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Application
            </Button>
          </DialogTrigger>
          <DialogContent>
            <form onSubmit={handleCreateApp}>
              <DialogHeader>
                <DialogTitle>Create a New Application</DialogTitle>
                <DialogDescription>Add a new application to integrate with Zapper</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="app-name">Application Name</Label>
                  <Input
                    id="app-name"
                    placeholder="Enter application name"
                    value={newAppName}
                    onChange={(e) => setNewAppName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="app-description">Description</Label>
                  <Input
                    id="app-description"
                    placeholder="Enter application description"
                    value={newAppDescription}
                    onChange={(e) => setNewAppDescription(e.target.value)}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Application"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {applications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center py-12">
            <AppWindow className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Applications Yet</h3>
            <p className="text-center text-muted-foreground max-w-md mb-6">
              Create your first application to start integrating with Zapper.
            </p>
            <Button onClick={() => setIsCreateAppDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Create Application
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Applications</CardTitle>
            <CardDescription>Applications that can be integrated with Zapper</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <Link href={`/applications/${app.id}`} className="hover:underline">
                        {app.name}
                      </Link>
                    </TableCell>
                    <TableCell>{app.description}</TableCell>
                    <TableCell>{app.team}</TableCell>
                    <TableCell>{formatDate(app.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
