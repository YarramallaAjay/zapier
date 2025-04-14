"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    try {
      // Replace with actual login logic
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store token in localStorage (for demo purposes)
      localStorage.setItem("auth-token", "demo-token")

      // Redirect to dashboard
      window.location.href = "/dashboard"
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-10">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login to Zapper</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="mt-4 flex items-center">
              <div className="flex-1 border-t"></div>
              <span className="mx-2 text-xs text-muted-foreground">OR</span>
              <div className="flex-1 border-t"></div>
            </div>

            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full" type="button">
                <Mail className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full" type="button">
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="hidden md:flex flex-col items-center justify-center rounded-lg bg-muted p-8">
          <div className="aspect-video w-full rounded-lg bg-muted-foreground/20 flex items-center justify-center">
            <p className="text-center text-muted-foreground">
              Video player will be here
              <br />
              (Video will be sourced externally)
            </p>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-lg font-medium">See how Zapper works</h3>
            <p className="text-sm text-muted-foreground">
              Watch our quick tutorial to learn how to create your first zap
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
