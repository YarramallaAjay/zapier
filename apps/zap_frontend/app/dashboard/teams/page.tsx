"use client"

import { redirect } from "next/navigation"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BuildingIcon, PlusIcon } from "lucide-react"
import { EmptyState } from "@/components/ui/dashboard/emptyState"
import Link from "next/link"

import data from "../data.json"

export default function Page() {
  // Check if user has any teams
  if (data.teams.length === 0) {
    return (
      <div>
         <SiteHeader />
          <EmptyState />
      </div>
         
    )
  }

  // Find primary team
  const primaryTeam = data.teams.find((team) => team.isPrimary)

  // If there's a primary team, redirect to that team's dashboard
  if (primaryTeam) {
    redirect(`/dashboard/teams/${primaryTeam.id}`)
  }

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <h1 className="text-2xl font-bold tracking-tight mb-6">Welcome to Team Dashboard</h1>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {data.teams.map((team) => (
                    <Card key={team.id}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BuildingIcon className="h-5 w-5" />
                          {team.name}
                        </CardTitle>
                        <CardDescription>{team.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            {team.applications.length} Application{team.applications.length !== 1 ? "s" : ""}
                          </div>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/dashboard/teams/${team.id}`}>View Team</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="border-dashed">
                    <CardHeader>
                      <CardTitle>Create a New Team</CardTitle>
                      <CardDescription>Start collaborating with your team members</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full gap-2" asChild>
                        <Link href="/dashboard/teams/new">
                          <PlusIcon className="h-4 w-4" />
                          Create Team
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
