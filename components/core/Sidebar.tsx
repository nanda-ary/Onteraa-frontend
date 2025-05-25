"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, BarChart, BadgeCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/core", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/core/users", icon: Users, label: "Users" },
  { href: "/core/licenses", icon: BadgeCheck, label: "Licenses" },
  { href: "/core/performance", icon: BarChart, label: "Performance" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="bg-background border-r w-64 p-4 space-y-4 shadow-xl rounded-r-3xl">
      <div className="text-xl font-bold px-2">Core OS</div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition hover:bg-muted",
                active && "bg-muted text-primary font-semibold"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
