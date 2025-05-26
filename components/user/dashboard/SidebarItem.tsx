"use client"

import Link from "next/link"
import React from "react"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  showLabel?: boolean
  iconColor?: string
  active?: boolean // ✅ accept active prop from parent
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  showLabel = true,
  iconColor = "text-muted-foreground",
  active = false,
}) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-muted",
          active && "bg-muted text-primary",
          showLabel ? "justify-start gap-3" : "justify-center"
        )}
      >
        <Icon
          className={cn(
            "w-5 h-5",
            !showLabel && "mx-auto",
            iconColor
          )}
        />
        {showLabel && <span className="truncate">{label}</span>}
      </div>
    </Link>
  )
}

export default SidebarItem
  