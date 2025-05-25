"use client"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useRouter } from "next/navigation"

export default function TopBar() {
  const router = useRouter()

  function handleLogout() {
    document.cookie = "onteraa_token=; Max-Age=0; path=/"
    router.push("/login")
  }

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-background/70 backdrop-blur-md">
      <h1 className="text-lg font-semibold">Core OS Dashboard</h1>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
    </header>
  )
}
