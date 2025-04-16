'use client';

import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HomeContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Zapier Clone</h1>
          <p className="text-xl mb-8">
            Connect your apps and automate your workflows
          </p>
          
          {user ? (
            <div className="space-y-4">
              <p className="text-lg">Welcome back, {user.name}!</p>
              <div className="flex justify-center gap-4">
                <Link href="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>
                <Link href="/zap/create">
                  <Button variant="outline">Create New Zap</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg">Get started by signing in</p>
              <div className="flex justify-center gap-4">
                <Link href="/login">
                  <Button>Sign In</Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 