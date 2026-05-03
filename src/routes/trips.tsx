import React from "react";
import { BottomNav } from "@/components/bottom-nav";
import { Calendar, MapPin } from "lucide-react";

function Trips() {
  const trips = [
    { date: "Today, 6:30 PM", from: "Bandra W", to: "BKC", status: "Upcoming", price: 85 },
    { date: "Yesterday", from: "Andheri", to: "Powai", status: "Completed", price: 120 },
    { date: "May 1", from: "Worli", to: "Airport T2", status: "Completed", price: 320 },
  ];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md px-5 pt-8 pb-32">
        <h1 className="text-3xl font-bold">Your trips</h1>
        <div className="mt-6 space-y-3">
          {trips.map((t, i) => (
            <article key={i} className="rounded-2xl bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3.5 text-primary" />
                  {t.date}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${
                    t.status === "Upcoming"
                      ? "bg-primary/15 text-primary"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {t.status}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="size-4 text-muted-foreground" />
                  <span className="font-medium">
                    {t.from} → {t.to}
                  </span>
                </div>
                <p className="text-base font-bold">₹{t.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BottomNav />
    </main>
  );
}

export default Trips;
