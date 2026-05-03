import React from "react";
import { BottomNav } from "@/components/bottom-nav";
import { MessageCircle } from "lucide-react";

function Messages() {
  const threads = [
    { name: "Aarav S.", last: "On my way, 2 mins!", time: "now", unread: 2 },
    { name: "Meera K.", last: "Pickup at gate B?", time: "5m", unread: 0 },
    { name: "Rohan P.", last: "Thanks for the ride 🙌", time: "1h", unread: 0 },
  ];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md px-5 pt-8 pb-32">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="mt-1 text-sm text-muted-foreground">Chats with your matched riders</p>
        <div className="mt-6 space-y-2">
          {threads.map((t) => (
            <article key={t.name} className="flex items-center gap-4 rounded-2xl bg-card p-4">
              <div className="size-12 rounded-full bg-gradient-to-br from-primary/60 to-primary/20" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{t.name}</p>
                  <span className="text-xs text-muted-foreground">{t.time}</span>
                </div>
                <p className="truncate text-sm text-muted-foreground">{t.last}</p>
              </div>
              {t.unread > 0 && (
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {t.unread}
                </span>
              )}
            </article>
          ))}
          {threads.length === 0 && (
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-card p-10 text-center">
              <MessageCircle className="size-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No conversations yet</p>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </main>
  );
}

export default Messages;
