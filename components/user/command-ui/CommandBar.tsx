"use client";

import { useRef, useState } from "react";
import { ArrowUp, Loader2, Plus, Sparkles, Wrench, Paperclip, ImageIcon, FileText } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CommandBarProps = {
  token: string;
};

export default function CommandBar({ token }: CommandBarProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/command-ui/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: input.trim() }),
      });

      if (!res.ok) {
        console.error("Command send failed");
      }
    } catch (err) {
      console.error("Error sending command:", err);
    } finally {
      setLoading(false);
      setInput("");
      if (textareaRef.current) textareaRef.current.style.height = "auto";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 10 * 24)}px`;
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-3xl mx-auto rounded-3xl border p-4 shadow-lg backdrop-blur-md",
        "border-white/20 dark:border-white/10",
        "bg-gradient-to-b from-white to-zinc-100 dark:from-[#1e293b] dark:to-[#0f172a] text-sm"
      )}
    >
      <div className="flex items-start gap-3">
        <Sparkles className="text-muted-foreground mt-1" size={16} />

        <div className="flex-1 space-y-3">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            rows={1}
            placeholder="Ask me anything…"
            className="w-full resize-none bg-transparent outline-none placeholder:text-muted-foreground text-sm"
          />

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4" />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="z-50 min-w-[160px] rounded-md border bg-background p-1 shadow-md">
                  <DropdownMenu.Item className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-muted">
                    <Paperclip className="w-4 h-4" />
                    Upload File
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-muted">
                    <ImageIcon className="w-4 h-4" />
                    Insert Image
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Wrench className="w-4 h-4" />
                    Tools
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="z-50 min-w-[160px] rounded-md border bg-background p-1 shadow-md">
                  <DropdownMenu.Item className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-muted">
                    <Sparkles className="w-4 h-4" />
                    Summarize
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-muted">
                    <FileText className="w-4 h-4" />
                    Rewrite
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>

            <Button
              onClick={sendMessage}
              size="icon"
              disabled={loading}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUp className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
