"use client"

import React, { useState } from "react"
import { Plus, ChevronLeft, ChevronRight, SidebarCloseIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ChatSession {
  id: string
  title: string
}

const mockChats: ChatSession[] = [
  { id: "1", title: "Chat about AI" },
  { id: "2", title: "Project ideas" },
  { id: "3", title: "Weekly meeting notes" },
  { id: "4", title: "Brainstorming session" },
  { id: "5", title: "Personal notes" }
   
]

const SidebarChat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [chats, setChats] = useState<ChatSession[]>(mockChats)
  const [activeChatId, setActiveChatId] = useState<string | null>(null)

  const onNewChat = () => {
    const newChat = {
      id: (chats.length + 1).toString(),
      title: `New chat #${chats.length + 1}`,
    }
    setChats([newChat, ...chats])
    setActiveChatId(newChat.id)
  }

  const toggleSidebar = () => setIsExpanded(!isExpanded)

  return (
    <>
      {/* Floating Expand Button */}
      {!isExpanded && (
        <button
          onClick={toggleSidebar}
          aria-label="Expand chat sidebar"
          className="fixed top-4 left-[5.5rem] z-50 flex h-10 w-10 items-center justify-center rounded-md bg-[#343541] text-gray-300 hover:bg-[#454857] transition"
          style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          "flex flex-col border-r bg-background shadow-lg transition-all duration-300",
          isExpanded ? "w-64" : "w-0 overflow-hidden"
        )}
      >
        {/* Content only if expanded */}
        {isExpanded && (
          <>
                      {/* Collapse button full width at bottom */}
            <div className="p-4">
              <button
                onClick={toggleSidebar}
                className="rounded-md px-3 py-2  text-sm font-semibold text-foreground hover:bg-muted transition"
                aria-label="Collapse sidebar"
              >
                <div className="flex items-center justify-end">
                  <SidebarCloseIcon className="w-4 h-4" />
 
                </div>
              </button>
            </div>
            {/* Header: New Chat button */}
            <div className="flex items-center justify-between px-4 py-4 h-16">
                      <Button size="lg" className="w-full" onClick={onNewChat}>
                        <Plus className="w-4 h-4" />
                         New Chat
                      </Button>

            </div>

            {/* Chat list with fancy scrollbar */}
             <div className="flex-1 overflow-y-auto px-2 py-4 space-y-2 scrollbar-thin scrollbar-thumb-[#575757]/40 scrollbar-track-transparent hover:scrollbar-thumb-[#575757]/60">
              {chats.map((chat) => {
                const isActive = chat.id === activeChatId
                return (
                  <div
                    key={chat.id}
                    onClick={() => setActiveChatId(chat.id)}
                    className={cn(
                      "cursor-pointer rounded-md px-3 py-2 text-sm font-medium truncate select-none transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-foreground"
                    )}
                    title={chat.title}
                  >
                    {chat.title}
                  </div>
                )
              })}
              {chats.length === 0 && (
                <p className="text-muted-foreground text-center text-sm">
                  No chats available
                </p>
              )}
            </div>


          </>
        )}
      </aside>
    </>
  )
}

export default SidebarChat
