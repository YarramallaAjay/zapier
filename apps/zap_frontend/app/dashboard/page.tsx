"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BuildingIcon, PlusIcon, UsersIcon, ZapIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import { prefetch } from "@/hooks/prefetch-api";
import { App, Team, Zap } from "@/lib/types";
import { EmptyState } from "@/components/ui/dashboard/emptyState";
import { axiosInstance } from "@/apiHandlers/ApiInstance";
import TeamPage from "./teams/[teamId]/page";

export default function Page() {
  const { user, isAuthenticated } = useAuth();
  const [teams, setTeams] = useState<Team[]>([]);
  const [zaps, setZaps] = useState<Zap[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        variant: "destructive",
        description: "Please login first",
      });
      router.push("/login");
      return;
    }

    const loadData = async () => {
      try {
        const res = await prefetch([
          {
            API: "zaps",
            method: "GET",
          },
          {
            API: "integrator/apps/team",
            method: "GET",
          },
        ]);

        const fetchedTeams = res["integrator/apps/team"]?.data ?? [];
        const fetchedZaps = res["zaps"]?.data ?? [];

        setTeams(Array.isArray(fetchedTeams) ? fetchedTeams : [fetchedTeams]);
        setZaps(Array.isArray(fetchedZaps) ? fetchedZaps : [fetchedZaps]);
      } catch (err) {
        console.error("Failed to load data", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [isAuthenticated]);

  const handleTeamCardClick = async (teamId: string) => {
    try {
      const res = await axiosInstance.get(`/integrator/apps/team/${teamId}`);
      if (res.status === 200 || res.status === 201) {
        const teamData = Array.isArray(res.data) ? res.data[0] : res.data;
        setSelectedTeam(teamData);
      } else {
        toast({
          title: "Login Required",
          variant: "destructive",
          description: "Please login first",
        });
      }
    } catch (error) {
      console.error("Error fetching team", error);
      toast({
        title: "Error",
        variant: "destructive",
        description: "Failed to load team data",
      });
    }
  };

  const LoadTeams = () => (
    <section>
      <h2 className="text-xl font-semibold mb-4">Teams</h2>
      {teams.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => (
            <Card key={t.id} onClick={() => handleTeamCardClick(t.id)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BuildingIcon className="h-5 w-5" />
                  {t.name}
                </CardTitle>
                <CardDescription>
                  {t.metadata?.description || `Team for ${t.name}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {t.apps && t.apps.length > 0 ? (
                    t.apps.map((a: App) => <li key={a.id}>• {a.name}</li>)
                  ) : (
                    <li>No apps yet</li>
                  )}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  Created by: {t.createdById}
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                Last updated: {new Date(t.updatedAt).toLocaleString()}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<BuildingIcon className="h-6 w-6 text-primary" />}
          title="No Teams Found"
          description="You're not a member of any team yet. Create your first team to get started."
          featureIcon={<UsersIcon className="h-4 w-4" />}
          featureTitle="Teams help you organize your work"
          featureDescription="Create a team to collaborate with others and manage applications together."
          actionHref="/dashboard/teams/new"
          actionText="Create New Team"
        />
      )}
    </section>
  );

  const LoadZaps = () => (
    <section>
      <h2 className="text-xl font-semibold mb-4">Zaps</h2>
      {zaps.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {zaps.map((z) => (
            <Card key={z.id} onClick={() => router.push(`dashboard/zaps/${z.id}`)}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ZapIcon className="h-5 w-5" />
                  {z.name}
                </CardTitle>
                <CardDescription>
                  {z.description || "No description"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Trigger: {z.trigger || "N/A"}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Status: {z.active ? "Active" : "Inactive"}
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">
                Last updated: {new Date(z.updatedAt).toLocaleString()}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<ZapIcon className="h-6 w-6 text-primary" />}
          title="No Zaps Created"
          description="Start automating your tasks by creating your first zap."
          featureIcon={<ZapIcon className="h-4 w-4" />}
          featureTitle="Zaps can streamline workflows"
          featureDescription="Define triggers and actions to automate your team's repetitive tasks."
          actionHref="/dashboard/zaps/new"
          actionText="Create New Zap"
        />
      )}
    </section>
  );

  if (loading) return <div className="p-4 text-center">Loading Dashboard...</div>;
  if (selectedTeam) return <TeamPage team={selectedTeam} />;

  return (
    <div className="p-6 space-y-10">
      <LoadTeams />
      <hr className="border-t border-muted w-full" />
      <LoadZaps />
    </div>
  );
}
