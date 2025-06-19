import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  featureIcon?: ReactNode;
  featureTitle?: string;
  featureDescription?: string;
  actionHref: string;
  actionText: string;
}

export function EmptyState({
  icon,
  title,
  description,
  featureIcon,
  featureTitle,
  featureDescription,
  actionHref,
  actionText,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
          <CardTitle className="text-xl mt-4">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        {(featureIcon || featureTitle || featureDescription) && (
          <CardContent className="flex flex-col gap-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-background p-2">
                  {featureIcon}
                </div>
                <div>
                  {featureTitle && <h3 className="text-sm font-medium">{featureTitle}</h3>}
                  {featureDescription && (
                    <p className="text-sm text-muted-foreground mt-1">{featureDescription}</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        )}

        <CardFooter>
          <Button asChild className="w-full gap-2">
            <Link href={actionHref}>{actionText}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
