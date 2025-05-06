import { Button } from "@/components/ui/button"
import { PlusIcon, UsersIcon } from "lucide-react"

interface TeamHeaderProps {
  teamName: string
  teamDescription: string
  memberCount: number
  isPrimary: boolean
}

export function TeamHeader({ teamName, teamDescription, memberCount, isPrimary }: TeamHeaderProps) {
  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between lg:px-6">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tight">{teamName}</h1>
          {isPrimary && (
            <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Primary Team</div>
          )}
        </div>
        <p className="text-muted-foreground">{teamDescription}</p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button variant="outline" size="sm" className="gap-1">
          <UsersIcon className="h-4 w-4" />
          <span>
            {memberCount} Member{memberCount !== 1 ? "s" : ""}
          </span>
        </Button>
        <Button size="sm" className="gap-1">
          <PlusIcon className="h-4 w-4" />
          <span>New Application</span>
        </Button>
      </div>
    </div>
  )
}
