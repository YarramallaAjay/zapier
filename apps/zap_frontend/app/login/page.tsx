"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function signInPage() {
  const { signIn, googleLogin, githubLogin } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const pagerouter=useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signIn({email, password})
      pagerouter.push("/")
    } catch (err) {
      setError(err instanceof Error ? err.message : "signIn failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-10">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">signIn to Zapper</CardTitle>
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
              {error && (
                <div className="text-sm text-red-500">
                  {error}
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-4 flex items-center">
              <div className="flex-1 border-t"></div>
              <span className="mx-2 text-xs text-muted-foreground">OR</span>
              <div className="flex-1 border-t"></div>
            </div>

            <div className="mt-4 space-y-2">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2"
                onClick={googleLogin}
              >
                <Mail className="h-4 w-4" />
                Google
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2"
                onClick={githubLogin}
              >
                <Github className="h-4 w-4" />
                GitHub
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
