import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Wallet, BarChart3, ImageIcon, Bell, Webhook, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Automate Your Web3 Workflows with Zapper
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Connect apps, automate tasks, and build workflows in minutes. No coding required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Everything you need to automate your web3 workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Zap Configuration</h3>
              <p className="text-muted-foreground text-center">
                Create custom workflows that connect your favorite apps and services.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Wallet Management</h3>
              <p className="text-muted-foreground text-center">
                Securely manage and automate tasks for multiple web3 wallets.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Market Watchers</h3>
              <p className="text-muted-foreground text-center">
                Get notified of market changes and automate responses to price movements.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <ImageIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">NFT Watchers</h3>
              <p className="text-muted-foreground text-center">
                Track NFT collections and automate actions based on floor price or sales.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Custom Notifications</h3>
              <p className="text-muted-foreground text-center">
                Get alerts via email, SMS, or push notifications when important events occur.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <Webhook className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Webhooks & Polling</h3>
              <p className="text-muted-foreground text-center">
                Trigger workflows via webhooks or schedule them with custom polling intervals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Create powerful automations in just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-bold">Choose a Trigger</h3>
              <p className="text-muted-foreground text-center">
                Select what starts your workflow - a webhook, schedule, or blockchain event.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-bold">Add Actions</h3>
              <p className="text-muted-foreground text-center">
                Define what happens when your trigger fires - send transactions, notifications, and more.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-bold">Let It Zap</h3>
              <p className="text-muted-foreground text-center">
                Activate your workflow and let Zapper handle the automation for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Automate Your Web3 Workflows?</h2>
            <p className="max-w-[700px] md:text-lg">
              Join thousands of users who are saving time and resources with Zapper.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
