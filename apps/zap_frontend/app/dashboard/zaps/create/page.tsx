"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ZapTemplates } from "@/components/ui/dashboard/zap-templates"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/dashboard/ui/drawer"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function CreateZapPage() {
  const [showSuccessDrawer, setShowSuccessDrawer] = useState(false)
  const router = useRouter()

  const handleZapCreated = () => {
    setShowSuccessDrawer(true)
  }

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create a New Zap</h1>
        <p className="text-muted-foreground mt-2">
          Choose a template to get started with your automation
        </p>
      </div>

      <ZapTemplates onZapCreated={handleZapCreated} />

      <Drawer open={showSuccessDrawer} onOpenChange={setShowSuccessDrawer}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Zap Created Successfully
            </DrawerTitle>
            <DrawerDescription>
              Your zap has been created and is ready to use. You can now configure it further or test it out.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <Button
              className="w-full"
              onClick={() => {
                setShowSuccessDrawer(false)
                router.push("/dashboard/zaps")
              }}
            >
              View My Zaps
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
