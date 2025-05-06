import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BuildingIcon, PlusIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

export function EmptyTeamState() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <BuildingIcon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl mt-4">No Teams Found</CardTitle>
          <CardDescription>You're not a member of any team yet. Create your first team to get started.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="rounded-md bg-muted p-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-background p-2">
                <UsersIcon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Teams help you organize your work</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Create a team to collaborate with others and manage applications together.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full gap-2">
            <Link href="/dashboard/teams/new">
              <PlusIcon className="h-4 w-4" />
              Create New Team
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
