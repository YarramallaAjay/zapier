import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { ApplicationCard } from "@/components/ui/dashboard/application-card"
import { TeamHeader } from "@/components/ui/dashboard/team-header"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"

import data from "../../data.json"

export default function TeamPage({ params }: { params: { teamId: string } }) {
  const team = data.teams.find((team) => team.id === params.teamId)

  if (!team) {
    notFound()
  }

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} activeTeamId={params.teamId} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <TeamHeader
            teamName={team.name}
            teamDescription={team.description}
            memberCount={team.members.length}
            isPrimary={team.isPrimary}
          />

          <div className="px-4 lg:px-6 pb-8">
            <h2 className="text-xl font-semibold mb-4">Applications</h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.applications.map((application) => (
                <ApplicationCard key={application.id} application={application} teamId={team.id} />
              ))}
            </div>

            {team.applications.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No applications yet</h3>
                <p className="text-muted-foreground mt-1">Create your first application to get started</p>
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
