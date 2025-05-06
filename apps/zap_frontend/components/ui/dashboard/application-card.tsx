import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { KeyIcon, BoltIcon, PlayIcon, MoreHorizontalIcon, ExternalLinkIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dashboard/ui/dropdown-menu"

interface Application {
  id: string
  name: string
  description: string
  status: string
  authMethods: Array<{
    id: string
    type: string
    name: string
    enabled: boolean
  }>
  triggers: Array<{
    id: string
    name: string
    description: string
    enabled: boolean
  }>
  actions: Array<{
    id: string
    name: string
    description: string
    enabled: boolean
  }>
}

interface ApplicationCardProps {
  application: Application
  teamId: string
}

export function ApplicationCard({ application, teamId }: ApplicationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{application.name}</CardTitle>
          <Badge variant={application.status === "active" ? "default" : "secondary"}>
            {application.status === "active" ? "Active" : "Development"}
          </Badge>
        </div>
        <CardDescription>{application.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <KeyIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              {application.authMethods.length} Auth Method{application.authMethods.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BoltIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              {application.triggers.length} Trigger{application.triggers.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PlayIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              {application.actions.length} Action{application.actions.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button asChild variant="outline" size="sm">
          <Link href={`/dashboard/teams/${teamId}/applications/${application.id}`}>Configure</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              <span>Open App</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <KeyIcon className="mr-2 h-4 w-4" />
              <span>Manage Auth</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Delete Application</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
