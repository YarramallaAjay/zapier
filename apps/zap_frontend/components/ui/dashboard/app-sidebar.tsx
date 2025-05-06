"use client"

import type * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { ArrowUpCircleIcon, BuildingIcon, CogIcon, HomeIcon, PlusCircleIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/dashboard/ui/sidebar"
import { NavUser } from "./nav-user"

interface Team {
  id: string
  name: string
  isPrimary: boolean
}

interface AppSidebarProps extends React.ComponentPropsWithoutRef<typeof Sidebar> {
  teams: Team[]
  user: {
    name: string
    email: string
    avatar: string
  }
  activeTeamId?: string
}

export function AppSidebar({ teams, user, activeTeamId, ...props }: AppSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleTeamClick = (teamId: string) => {
    router.push(`/dashboard/teams/${teamId}`)
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="/dashboard">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Team Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center gap-2">
                <SidebarMenuButton
                  tooltip="Create Team"
                  className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                  onClick={() => router.push("/dashboard/teams/new")}
                >
                  <PlusCircleIcon />
                  <span>Create Team</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Home"
                  isActive={pathname === "/dashboard"}
                  onClick={() => router.push("/dashboard")}
                >
                  <HomeIcon />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex items-center justify-between w-full">
              <span>Teams</span>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add Team</span>
              </Button>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {teams.map((team) => (
                <SidebarMenuItem key={team.id}>
                  <SidebarMenuButton
                    tooltip={team.name}
                    isActive={team.id === activeTeamId}
                    onClick={() => handleTeamClick(team.id)}
                  >
                    <BuildingIcon />
                    <span>{team.name}</span>
                    {team.isPrimary && <SidebarMenuBadge>Primary</SidebarMenuBadge>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings" onClick={() => router.push("/dashboard/settings")}>
                  <CogIcon />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
