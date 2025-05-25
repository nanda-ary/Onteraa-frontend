import React from "react"
import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  active?: boolean
  showLabel?: boolean
  iconColor?: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  showLabel = true,
  iconColor = "text-muted-foreground",
}) => (
<div
  className={cn(
    "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer hover:bg-muted",
    active && "bg-muted",
    showLabel ? "justify-start gap-3" : "justify-center"
  )}
>
  <Icon
    className={cn(
      "w-5 h-5",
      !showLabel && "mx-auto",
      iconColor || "text-primary" // use passed color or fallback
    )}
  />
  {showLabel && <span className="truncate">{label}</span>}
</div>
)


export default SidebarItem
