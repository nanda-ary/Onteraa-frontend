// app/core/layout.tsx
"use client"
import React from "react"
import Sidebar from "@/components/core/Sidebar"
import TopBar from "@/components/core/TopBar"

export default function CoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <TopBar />
        <main className="flex-1 p-6 bg-muted/40">{children}</main>
      </div>
    </div>
  )
}
