'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useAuth } from '@/contexts/auth-context'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const { isAuthenticated, signOut } = useAuth()
  const [mounted, setMounted] = useState(false)

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null
  }

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
            {['/features', '/pricing', '/docs'].map((route) => (
              <Link
                key={route}
                href={route}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {route.replace('/', '').charAt(0).toUpperCase() + route.slice(2)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link href="/applications">My Applications</Link>
              </Button>
              <Button variant="ghost" onClick={signOut}>
                Sign Out
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
              {['/features', '/pricing', '/docs'].map((route) => (
                <Link
                  key={route}
                  href={route}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {route.replace('/', '').charAt(0).toUpperCase() + route.slice(2)}
                </Link>
              ))}

              <div className="h-px bg-border my-4" />

              {isAuthenticated ? (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/applications">My Applications</Link>
                  </Button>
                  <Button variant="ghost" onClick={signOut} className="w-full">
                    Sign Out
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
