"use client"

import type React from "react"

import { useState } from "react"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon, BuildingIcon, Loader2Icon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import data from "../../data.json"

export default function NewTeamPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [teamName, setTeamName] = useState("")
  const [teamDescription, setTeamDescription] = useState("")
  const [isPrimary, setIsPrimary] = useState(data.teams.length === 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would make an API call to create the team
      // and then redirect to the new team's page
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col items-center py-10">
          <Card className="mx-auto w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild className="h-8 w-8">
                  <Link href="/dashboard">
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Link>
                </Button>
                <div>
                  <CardTitle className="text-xl">Create a New Team</CardTitle>
                  <CardDescription>Set up a workspace for your team</CardDescription>
                </div>
              </div>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="team-name">Team Name</Label>
                  <Input
                    id="team-name"
                    placeholder="Enter team name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team-description">Description</Label>
                  <Textarea
                    id="team-description"
                    placeholder="Describe what this team does"
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="primary-team"
                    className="h-4 w-4 rounded border-gray-300"
                    checked={isPrimary}
                    onChange={(e) => setIsPrimary(e.target.checked)}
                    disabled={data.teams.length === 0}
                  />
                  <Label htmlFor="primary-team" className="text-sm font-normal">
                    Set as primary team
                    {data.teams.length === 0 && (
                      <span className="ml-1 text-xs text-muted-foreground">(Required for first team)</span>
                    )}
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <BuildingIcon className="mr-2 h-4 w-4" />
                      Create Team
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
