"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuthStore } from "@/store/userStore"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  // Check if user is logged in (this would be replaced with your auth logic)
  useEffect(() => {
    // Example: Check localStorage or session for auth token
    const token =
    setIsLoggedIn(!!token)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              Z
            </div>
            <span className="text-xl font-bold">Zapper</span>
          </Link>

          <nav className="hidden md:flex gap-6 ml-6">
            <Link
              href="/features"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/features" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/pricing" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/docs" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Docs
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link href="/applications">My Applications</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </Link>
              <Link href="/docs" className="text-sm font-medium transition-colors hover:text-primary">
                Docs
              </Link>

              <div className="h-px bg-border my-4" />

              {isLoggedIn ? (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/applications">My Applications</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
