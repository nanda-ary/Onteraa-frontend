"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const TopBar: React.FC = () => (
  <header className="flex items-center justify-between border-b px-6 py-4">
    <h2 className="text-lg font-semibold">Ask Ai</h2>
    <div className="flex items-center gap-3">
      <Button className="text-xs px-3 py-1">Try Onteraa Pro</Button>
      <ModeToggle />
    </div>
  </header>
)

export default TopBar;