"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings, Trash2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { App, Team } from "@/lib/types";
import { axiosInstance } from "@/apiHandlers/ApiInstance";
import { NEXT_PUBLIC_BACKEND_URL } from "@/config";

export default function ApplicationsPage() {
  const { user } = useAuth();
  const [apps, setApps] = useState<App[]>([]);
  const [teams, setTeams] = useState<Team[]|Team>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      const teamExisted = user.teams || [];
      if (teamExisted.length > 0) {
        setTeams(teamExisted);
      } else {
        loadTeams();
      }
    }
  }, [user]);

  const loadTeams = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`${NEXT_PUBLIC_BACKEND_URL}/integrator/apps/team`);
  
      let fetchedTeams = response.data?.data;
  
      if (!fetchedTeams) {
        setTeams([]);
      } else if (Array.isArray(fetchedTeams)) {
        setTeams(fetchedTeams);
      } else if (typeof fetchedTeams === "object" && fetchedTeams.id) {
        // Handle single team object
        setTeams([fetchedTeams]);
      } else {
        setTeams([]);
      }
  
    } catch (e) {
      console.error("Error loading teams:", e);
      setError("Failed to load teams.");
    } finally {
      setLoading(false);
    }
  };
  

  const handleDeleteApp = async (appId: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.delete(`${NEXT_PUBLIC_BACKEND_URL}/integrator/apps/${appId}`);
      if (response.status === 200) {
        setApps((prevApps) => prevApps.filter((app) => app.id !== appId));
      } else {
        setError("Failed to delete app.");
      }
    } catch (e) {
      console.error("Error deleting app:", e);
      setError("Failed to delete app.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTeam = async () => {
    try {
      const res = await axiosInstance.post(`${NEXT_PUBLIC_BACKEND_URL}/integrator/apps/team`, {
        name: `Team-${Date.now()}`,
        metadata: {},
      });

      if (res.status === 201) {
        loadTeams(); // reload teams
      }
    } catch (e) {
      console.error("Error creating team:", e);
      setError("Could not create team.");
    }
  };

  const newApp = () => {
    console.log("Open App Creation Flow");
    // You can implement modal logic here
  };

  const renderAppCard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h2 className="text-2xl font-bold col-span-full">Apps</h2>
      {(teams.length>0 && apps.length > 0) && (
        apps.map((app) => (
          <Card key={app.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {app.icon || "A"}
                  </div>
                  <div>
                    <CardTitle>{app.name}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteApp(app.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className={app.isActive ? "text-green-500" : "text-red-500"}>
                    {app.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Created</span>
                  <span>{new Date(app.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) }
      {(apps.length===0 && teams.length>0) && (
          <Card className="border-dashed border-2 hover:border-purple-500 transition-colors">
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[200px]">
              <Button
                variant="ghost"
                className="flex flex-col items-center space-y-2"
                onClick={newApp}
              >
                <span className="text-gray-500">Add New App</span>
              </Button>
            </CardContent>
          </Card>
        )}
      
    </div>
  );

  const renderTeamCard = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <h2 className="text-2xl font-bold col-span-full">Teams</h2>
      {teams.length > 0 ? (
        teams.map((team) => (
          <Card key={team.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
              <CardDescription>Created by: {team.createdById}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Team ID: {team.id}</p>
            </CardContent>
          </Card>
        ))
      ) : (

      <Card className="border-dashed border-2 hover:border-purple-500 transition-colors">
        <CardContent className="flex flex-col items-center justify-center h-full min-h-[200px]">
          <Button
            variant="ghost"
            className="flex flex-col items-center space-y-2"
            onClick={handleCreateTeam}
          >
            <span className="text-gray-500">Create New Team</span>
          </Button>
        </CardContent>
      </Card>)};
  </div>)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Applications</h1>
        <p className="text-gray-600">Manage your app integrations</p>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
      )}

      {renderTeamCard()}
      {renderAppCard()}
    </div>
  );
}
