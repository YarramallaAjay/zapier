"use client";
import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/ui/dashboard/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusIcon, SearchIcon } from "lucide-react"
import { ZapsTable } from "@/components/ui/dashboard/zaps-table"
import Link from "next/link"
import { prefetch } from "@/hooks/prefetch-api"

export default function ZapsPage() {
  const [zaps, setZaps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await prefetch([
          {
            API: "zaps",
            method: "GET",
          }
        ]);

        const fetchedZaps = res["zaps"]?.data ?? [];
        setZaps(Array.isArray(fetchedZaps) ? fetchedZaps : [fetchedZaps]);
      } catch (err) {
        console.error("Failed to load data", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [])

  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <div className="px-4 lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Zaps</h1>
              <p className="text-muted-foreground">
                Manage your automated workflows that connect your apps and services.
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard/zaps/create">
                <PlusIcon className="mr-2 h-4 w-4" />
                Create Zap
              </Link>
            </Button>
          </div>
        </div>

        <div className="px-4 lg:px-6">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search zaps..." className="w-full bg-background pl-8 md:max-w-sm" />
            </div>
            <div className="flex flex-row gap-2">
              <Button variant="outline">Filter</Button>
              <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="all">All Zaps</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-6">
          <ZapsTable zaps={zaps} loading={loading} />
        </div>
      </div>
    </div>
  )
}