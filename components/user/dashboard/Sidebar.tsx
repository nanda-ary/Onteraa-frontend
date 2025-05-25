"use client"
import React, { useState } from "react"
import SidebarItem from "./SidebarItem"
import Image from "next/image"
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  History,
  HelpCircle,
  Settings,
  Users,
  Bot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarGroups = [
  {
    label: "Main",
    items: [
      { icon: LayoutDashboard, label: "Ask Ai", color: "text-blue-500", active: true },
      { icon: FolderKanban, label: "ONERP", color: "text-purple-500" },
    ],
  },
  {
    label: "Resources",
    items: [
      { icon: FileText, label: "Templates", color: "text-teal-500" },
      { icon: FileText, label: "Documents", color: "text-cyan-500" },
    ],
  },
  {
    label: "Community",
    items: [
      { icon: Users, label: "Community", color: "text-orange-500" },
      { icon: History, label: "History", color: "text-yellow-500" },
    ],
  },
  {
    label: "Settings",
    items: [
      { icon: Settings, label: "Settings", color: "text-pink-500" },
      { icon: HelpCircle, label: "Help", color: "text-emerald-500" },
    ],
  },
]

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => setIsExpanded(!isExpanded)

  return (
<aside
  className={cn(
    "min-h-screen border-r bg-background flex flex-col justify-between transition-all duration-300 shadow-lg rounded-r-3xl",
    isExpanded ? "w-64" : "w-20"
  )}
>


      {/* Top section */}
      <div>
<div className="px-4 py-4 h-16 flex items-center justify-between">
  {isExpanded ? (
    <>
      <div className="flex items-center gap-2">
        <Bot className="w-5 h-5" />
        <span className="text-lg font-bold">Onteraa</span>
      </div>
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center rounded-md p-1 hover:bg-muted transition"
        style={{ width: 32, height: 32 }}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    </>
  ) : (
    <div className="w-full flex items-center justify-center">
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center rounded-md p-1 hover:bg-muted transition"
        style={{ width: 32, height: 32 }}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )}
</div>



        <div className="px-2 space-y-6">
          {sidebarGroups.map(({ label, items }) => (
            <div key={label}>
              {isExpanded && (
                <div className="mb-2 px-3 text-xs font-semibold uppercase text-muted-foreground">
                  {label}
                </div>
              )}
              <div className="space-y-1">
                {items.map(({ icon, label, active, color }, idx) => (
                  <SidebarItem
                    key={idx}
                    icon={icon}
                    label={label}
                    active={active}
                    showLabel={isExpanded}
                    iconColor={color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom user section */}
      <div className="p-4">
  {isExpanded ? (
    <div className="flex items-center gap-3">
      <Image
        src="https://i.pravatar.cc/40"
        alt="User"
        width={32}
        height={32}
        className="rounded-full"
      />
      <div className="overflow-hidden">
        <div className="font-medium leading-tight truncate">Ari Ananda</div>
        <div className="text-muted-foreground text-xs truncate">ari.ananda@onteraa.com</div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <Image
        src="https://i.pravatar.cc/40"
        alt="User"
        width={32}
        height={32}
        className="rounded-full"
      />
    </div>
  )}
</div>

    </aside>
  )
}

export default Sidebar
