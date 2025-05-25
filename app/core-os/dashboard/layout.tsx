// app/core/layout.tsx
import Sidebar from "@/components/core/Sidebar"
import TopBar from "@/components/core/TopBar"

export default function CoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <main className="flex-1 overflow-auto p-6 bg-background">{children}</main>
      </div>
    </div>
  )
}
