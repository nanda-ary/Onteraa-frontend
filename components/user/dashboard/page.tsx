"use client"

import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  History,
  HelpCircle,
  Settings,
  Users,
  Plus,
  Search,
  Sun,
  Moon,
  Bot,
  ArrowUpRight,
  Paperclip,
  Mic,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/mode-toggle";
const SidebarItem = ({ icon: Icon, label, active = false }: any) => (
  <div
    className={`flex items-center gap-3 text-sm px-4 py-2 rounded-md cursor-pointer hover:bg-muted transition ${
      active ? "bg-muted font-semibold" : "text-muted-foreground"
    }`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </div>
)

const QuickAction = ({ label, color }: any) => (
  <div
    className={`flex items-center justify-between gap-2 rounded-md px-4 py-3 text-sm font-medium shadow-sm hover:shadow-md transition w-full ${color}`}
  >
    <div className="flex items-center gap-2">
      <Sparkles className="w-4 h-4" />
      {label}
    </div>
    <Plus className="w-4 h-4 opacity-70" />
  </div>
)

export default function DashboardPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickActions = [
    { label: "Validate your idea", color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
    { label: "Image generation", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
    { label: "Create avatar", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
    { label: "Write code", color: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200" },
  ]

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background flex flex-col justify-between">
        <div>
          <div className="flex items-center px-4 py-4 text-lg font-bold">
            <Bot className="w-5 h-5 mr-2" /> Onteraa
          </div>
          <div className="px-2 space-y-1">
            <SidebarItem icon={LayoutDashboard} label="Ask Ai" active />
            <SidebarItem icon={FolderKanban} label="ONERP" />
            <SidebarItem icon={FileText} label="Templates" />
            <SidebarItem icon={FileText} label="Documents" />
            <SidebarItem icon={Users} label="Community" />
            <SidebarItem icon={History} label="History" />
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={HelpCircle} label="Help" />
          </div>
        </div>
        <div className="p-4 space-y-4">
   
          <div className="flex items-center gap-2 text-sm">
            <Image
              src="https://i.pravatar.cc/40"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">Ari Ananda</div>
              <div className="text-muted-foreground text-xs">
                ari.ananda@onteraa.com
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Ask Ai</h2>
          <div className="flex items-center gap-3">
            <Button className="text-xs px-3 py-1">
              Try Onteraa Pro
            </Button>
            <ModeToggle />
          </div>
        </header>

        {/* Welcome Section */}
        <main className="flex-1 overflow-auto px-10 py-6">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Welcome to Onteraa</h1>
            <p className="text-muted-foreground mb-6">
              Get started by Onteraa a task and Chat can do the rest. Not sure where to start?
            </p>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, i) => (
                <QuickAction key={i} {...action} />
              ))}
            </div>
          </div>
        </main>

        {/* Command Bar */}
        <div className="px-6 pb-4">
          <div className="flex items-center gap-2 border px-4 py-2 rounded-full shadow-sm">
            <Paperclip className="w-4 h-4 text-muted-foreground" />
            <Mic className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Summarize the latest profit and loss"
              className="flex-1 outline-none text-sm bg-transparent placeholder:text-muted-foreground"
            />
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="text-xs text-muted-foreground mt-2 text-center">
            Script may generate inaccurate information about people, places, or facts. Model: Script AI v1.3
          </div>
        </div>
      </div>

      {/* Right Panel 
      <aside className="w-72 border-l px-4 py-6 space-y-3 bg-background">
        <h3 className="text-sm font-semibold text-muted-foreground">Projects (7)</h3>
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="border px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-muted"
          >
            {i === 0 ? "New Project" : `Project ${i}`}
          </div>
        ))}
      </aside>*/}
    </div>
  )
}
