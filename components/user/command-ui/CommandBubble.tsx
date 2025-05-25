"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

type CommandBubbleProps = {
  content: string
  timestamp?: string
  status?: "default" | "success" | "error"
  typing?: boolean
}

const statusStyles = {
  default: "bg-muted text-foreground",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

const CommandBubble: React.FC<CommandBubbleProps> = ({
  content,
  timestamp,
  status = "default",
  typing = false,
}) => {
  return (
    <div
      className={cn(
        "max-w-lg w-fit rounded-2xl px-4 py-3 shadow-md transition-all",
        statusStyles[status]
      )}
      data-aos="fade-up"
    >
      <div className="prose prose-sm dark:prose-invert whitespace-pre-wrap">
        {typing ? (
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Typing...</span>
          </div>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        )}
      </div>
      {timestamp && (
        <div className="text-xs text-muted-foreground mt-1 text-right">{timestamp}</div>
      )}
    </div>
  )
}

export default CommandBubble
