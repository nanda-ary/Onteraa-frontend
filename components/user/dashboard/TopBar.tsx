"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

const TopBar: React.FC = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    })

    router.replace("/login")
  }

  return (
    <header className="flex items-center justify-between border-b px-6 py-4">
      <h2 className="text-lg font-semibold">Ask Ai</h2>
      <div className="flex items-center gap-3">
        <Button asChild variant="outline" size="sm" className="hidden">
          <Link href="/login">
            <span>Try Onteraa Enterprise</span>
          </Link>
        </Button>

        <Button size="sm" onClick={handleLogout}>
          Logout
        </Button>

        <ModeToggle />
      </div>
    </header>
  )
}

export default TopBar
