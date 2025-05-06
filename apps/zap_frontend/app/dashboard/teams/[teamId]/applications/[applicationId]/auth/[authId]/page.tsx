import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/ui/dashboard/app-sidebar"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/dashboard/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/dashboard/ui/tabs"
import { Switch } from "@/components/ui/dashboard/ui/switch"
import { ArrowLeftIcon, KeyIcon } from "lucide-react"
import Link from "next/link"

import data from "@/app/dashboard/data.json"

export default function AuthConfigPage({
  params,
}: {
  params: { teamId: string; applicationId: string; authId: string }
}) {
  const team = data.teams.find((team) => team.id === params.teamId)
  if (!team) {
    notFound()
  }

  const application = team.applications.find((app) => app.id === params.applicationId)
  if (!application) {
    notFound()
  }

  const authMethod = application.authMethods.find((auth) => auth.id === params.authId)
  if (!authMethod) {
    notFound()
  }

  return (
    <SidebarProvider>
      <AppSidebar teams={data.teams} user={data.user} activeTeamId={params.teamId} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-4 px-4 py-6 lg:px-6">
            <Button variant="outline" size="icon" asChild>
              <Link href={`/dashboard/teams/${params.teamId}/applications/${params.applicationId}`}>
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back to application</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <KeyIcon className="h-5 w-5" />
                {authMethod.name} Configuration
              </h1>
              <p className="text-muted-foreground">Configure authentication settings for {application.name}</p>
            </div>
          </div>

          <div className="px-4 lg:px-6 pb-8">
            <Tabs defaultValue="settings">
              <TabsList className="mb-4">
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="providers">Providers</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Configure general settings for this authentication method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Enable Authentication Method</Label>
                        <p className="text-sm text-muted-foreground">
                          When disabled, users cannot authenticate using this method
                        </p>
                      </div>
                      <Switch defaultChecked={authMethod.enabled} />
                    </div>

                    <div className="space-y-2 pt-4">
                      <Label htmlFor="auth-name">Display Name</Label>
                      <Input id="auth-name" defaultValue={authMethod.name} />
                      <p className="text-sm text-muted-foreground">
                        This name will be displayed to users during authentication
                      </p>
                    </div>

                    {authMethod.type === "email" && (
                      <>
                        <div className="space-y-2 pt-2">
                          <Label htmlFor="password-min-length">Minimum Password Length</Label>
                          <Input id="password-min-length" type="number" defaultValue="8" />
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="space-y-0.5">
                            <Label>Require Special Characters</Label>
                            <p className="text-sm text-muted-foreground">
                              Require at least one special character in passwords
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="space-y-0.5">
                            <Label>Allow Password Reset</Label>
                            <p className="text-sm text-muted-foreground">
                              Enable password reset functionality for users
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </>
                    )}

                    {authMethod.type === "oauth" && (
                      <>
                        <div className="space-y-2 pt-2">
                          <Label htmlFor="redirect-uri">Redirect URI</Label>
                          <Input id="redirect-uri" defaultValue="https://example.com/auth/callback" />
                          <p className="text-sm text-muted-foreground">The URI to redirect to after authentication</p>
                        </div>

                        <div className="space-y-2 pt-2">
                          <Label htmlFor="client-id">Client ID</Label>
                          <Input id="client-id" defaultValue="your-client-id" />
                        </div>

                        <div className="space-y-2 pt-2">
                          <Label htmlFor="client-secret">Client Secret</Label>
                          <Input id="client-secret" type="password" defaultValue="your-client-secret" />
                        </div>
                      </>
                    )}

                    {authMethod.type === "sso" && (
                      <>
                        <div className="space-y-2 pt-2">
                          <Label htmlFor="sso-entity-id">Entity ID</Label>
                          <Input id="sso-entity-id" defaultValue="https://example.com" />
                        </div>

                        <div className="space-y-2 pt-2">
                          <Label htmlFor="sso-acs-url">ACS URL</Label>
                          <Input id="sso-acs-url" defaultValue="https://example.com/sso/callback" />
                        </div>

                        <div className="space-y-2 pt-2">
                          <Label htmlFor="sso-certificate">Certificate</Label>
                          <textarea
                            id="sso-certificate"
                            className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2"
                            defaultValue="-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAJC1HiIAZAiIMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNV
BAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBX
aWRnaXRzIFB0eSBMdGQwHhcNMTkwNjA3MDkzODQzWhcNMjAwNjA2MDkzODQzWjBF
MQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50
ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB
CgKCAQEA8+Qq
-----END CERTIFICATE-----"
                          />
                        </div>
                      </>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="providers">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication Providers</CardTitle>
                    <CardDescription>Configure external authentication providers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {authMethod.type === "oauth" && (
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Google</h3>
                              <p className="text-sm text-muted-foreground">Allow users to sign in with Google</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">GitHub</h3>
                              <p className="text-sm text-muted-foreground">Allow users to sign in with GitHub</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">Microsoft</h3>
                              <p className="text-sm text-muted-foreground">Allow users to sign in with Microsoft</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    )}

                    {authMethod.type !== "oauth" && (
                      <div className="py-8 text-center">
                        <p className="text-muted-foreground">
                          Provider configuration is only available for OAuth authentication methods.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Configure security settings for this authentication method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Rate Limiting</Label>
                        <p className="text-sm text-muted-foreground">
                          Limit authentication attempts to prevent brute force attacks
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="space-y-2 pt-2">
                      <Label htmlFor="max-attempts">Maximum Attempts</Label>
                      <Input id="max-attempts" type="number" defaultValue="5" />
                      <p className="text-sm text-muted-foreground">
                        Maximum number of failed attempts before temporary lockout
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <Label htmlFor="lockout-time">Lockout Time (minutes)</Label>
                      <Input id="lockout-time" type="number" defaultValue="15" />
                      <p className="text-sm text-muted-foreground">
                        Time in minutes before a user can attempt to authenticate again after being locked out
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-0.5">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Require two-factor authentication for additional security
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
