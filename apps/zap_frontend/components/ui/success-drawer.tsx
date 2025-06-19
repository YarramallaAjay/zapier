"use client"

import { useState, useEffect } from "react"
import { CheckCircleIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/dashboard/ui/drawer"
import { useRouter } from "next/navigation"

interface SuccessDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  redirectPath?: string
  redirectLabel?: string
}

export function SuccessDrawer({
  open,
  onOpenChange,
  title,
  description,
  redirectPath,
  redirectLabel = "View Details",
}: SuccessDrawerProps) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (open && isClient) {
      // Simulate confetti effect when drawer opens
      const confettiEffect = () => {
        // Simple confetti effect simulation
        console.log("Confetti effect triggered!")
      }
      confettiEffect()
    }
  }, [open, isClient])

  const handleRedirect = () => {
    if (redirectPath) {
      onOpenChange(false)
      router.push(redirectPath)
    }
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent side="bottom" className="max-w-md mx-auto rounded-t-lg">
        <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircleIcon className="h-6 w-6 text-green-600" />
        </div>
        <DrawerHeader className="text-center">
          <DrawerTitle className="text-xl">{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          {redirectPath && (
            <Button onClick={handleRedirect} className="w-full gap-2">
              {redirectLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          )}
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
