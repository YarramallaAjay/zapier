"use client";

import type React from "react";
import { useState } from "react";
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar";
import { SiteHeader } from "@/components/ui/dashboard/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/dashboard/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeftIcon,
  BuildingIcon,
  Loader2Icon,
  PlusIcon,
  XIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import data from "../../data.json";
import { axiosInstance } from "@/apiHandlers/ApiInstance";
import { UserDetails } from "@repo/types/src/UserSession";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/auth-context";
import { SuccessDrawer } from "@/components/ui/success-drawer";
import { Drawer } from "@/components/ui/dashboard/ui/drawer";

export default function NewTeamPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [isPrimary, setIsPrimary] = useState(data.teams.length === 0);
  const { user } = useAuth();
  const [currentInput, setCurrentInput] = useState("");
  const [emails, setEmails] = useState<string[]>([]);
  const { toast } = useToast();
  const [showSuccessDrawer, setSuccessDrawer]=useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleAddEmail = () => {
    const trimmed = currentInput.trim();
    if (validateEmail(trimmed) && !emails.includes(trimmed)) {
      setEmails([...emails, trimmed]);
      setCurrentInput("");
    }
  };

  const handleRemoveEmail = (index: number) => {
    const updated = [...emails];
    updated.splice(index, 1);
    setEmails(updated);
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const trimmed = currentInput.trim();
    const finalEmails = [...emails];

    if (validateEmail(trimmed) && !finalEmails.includes(trimmed)) {
      finalEmails.push(trimmed);
      setEmails(finalEmails);
      setCurrentInput("");
    }

    try {
      const res = await axiosInstance.post("/integrator/apps/team", {
        name: teamName,
        members: [...finalEmails, user?.email],
        metadata: {
          description: teamDescription,
          primaryUser: user.id,
        },
        createdById: (user as UserDetails).id,
      });

      if (res.status === 200 || res.status === 201) {
        setSuccessDrawer(true)
      }

    } catch (error) {
      console.error("Team creation failed:", error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col items-center py-10">
          <Card className="mx-auto w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-8 w-8"
                >
                  <Link href="/dashboard">
                    <ArrowLeftIcon className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                  </Link>
                </Button>
                <div>
                  <CardTitle className="text-xl">Create a New Team</CardTitle>
                  <CardDescription>
                    Set up a workspace for your team
                  </CardDescription>
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

                <div className="space-y-2">
                  <Label>Members</Label>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <UsersIcon className="h-4 w-4 mr-2" />
                        {emails.length > 0
                          ? `View ${emails.length} member${emails.length > 1 ? "s" : ""}`
                          : "No members added"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72">
                      <div className="space-y-2">
                        <Label>Members</Label>
                        <div className="flex flex-wrap gap-2 p-2 border rounded-md bg-muted/20">
                          {emails.map((email, index) => (
                            <div
                              key={index}
                              className="flex items-center bg-muted text-sm px-2 py-1 rounded-full"
                            >
                              {email}
                              <button
                                type="button"
                                onClick={() => handleRemoveEmail(index)}
                                className="ml-2 text-red-500 hover:text-red-700"
                              >
                                <XIcon className="h-3 w-3" />
                              </button>
                            </div>
                          ))}
                          <input
                            type="email"
                            placeholder="Add email"
                            value={currentInput}
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (["Enter", ","].includes(e.key)) {
                                e.preventDefault();
                                handleAddEmail();
                              }
                            }}
                            onBlur={() => {
                              if (validateEmail(currentInput.trim())) {
                                handleAddEmail();
                              }
                            }}
                            className="flex-1 bg-transparent outline-none border-none text-sm min-w-[120px]"
                          />
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  
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
                      <span className="ml-1 text-xs text-muted-foreground">
                        (Required for first team)
                      </span>
                    )}
                  </Label>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
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
{showSuccessDrawer && (
  <SuccessDrawer
    open={showSuccessDrawer}
    onOpenChange={setSuccessDrawer}
    title="Success"
    description="New Team created Successfully"
    redirectLabel="Go to Dashboard"
    redirectPath="/dashboard"
  />
)}
      </SidebarInset>
    </SidebarProvider>
  );
}
