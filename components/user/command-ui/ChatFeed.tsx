// components/user/command-ui/ChatFeed.tsx
"use client";

import CommandBubble from "./CommandBubble";

export default function ChatFeed({ logs }: { logs: any[] }) {
  return (
    <div className="space-y-4">
      {logs.map((log) => (
        <div key={log.id}>
          <CommandBubble content={log.content} status="default" />
          {log.results.map((r: any, i: number) => (
            <CommandBubble
              key={i}
              content={r.result}
              status={r.status === "success" ? "success" : "error"}
              timestamp={r.created_at}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
