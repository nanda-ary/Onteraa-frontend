"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link";
const TopBar: React.FC = () => (
  <header className="flex items-center justify-between border-b px-6 py-4">
    <h2 className="text-lg font-semibold">Ask Ai</h2>
    <div className="flex items-center gap-3">
<Button asChild variant="outline" size="sm">
                  <Link href="/login">
                    <span>Try Onteraa Enteprise</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/register">
                    <span>Logout</span>
                  </Link>
                </Button>
      <ModeToggle />
    </div>
  </header>
)

export default TopBar;