"use client";

import { notFound } from "next/navigation";
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar";
import { ApplicationCard } from "@/components/ui/dashboard/application-card";
import { TeamHeader } from "@/components/ui/dashboard/team-header";
import { SiteHeader } from "@/components/ui/dashboard/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/dashboard/ui/sidebar";
import { TeamBase } from "@repo/types/src/Team";

export default function TeamPage({ team }: { team: TeamBase }) {
  if (!team) {
    notFound();
  }

  return (
    <SidebarProvider>
      <AppSidebar
        teams={team.apps || []}
        user={team.createdById}
        activeTeamId={team.id}
      />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <TeamHeader
            teamName={team.name}
            teamDescription={team.metadata?.description ?? ""}
            memberCount={team.members?.length || 0}
            isPrimary={false}
          />

          <div className="px-4 lg:px-6 pb-8">
            <h2 className="text-xl font-semibold mb-4">Applications</h2>

            {team.apps && team.apps.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {team.apps.map((application: any) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                    teamId={team.id}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No applications yet</h3>
                <p className="text-muted-foreground mt-1">
                  Create your first application to get started
                </p>
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
