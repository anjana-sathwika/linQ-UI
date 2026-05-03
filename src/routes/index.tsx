import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bell,
  MessageCircle,
  Users,
  ShieldCheck,
  Zap,
  Briefcase,
  Plane,
  Search,
  ArrowUpDown,
  Calendar,
  Star,
  BadgeCheck,
} from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "together. — Share the way" },
      {
        name: "description",
        content:
          "together. matches verified riders going the same way at the same time. Instant, daily commute, and long distance carpools.",
      },
      { property: "og:title", content: "together. — Share the way" },
      {
        property: "og:description",
        content:
          "Verified ride-sharing for instant trips, daily commutes, and long distance journeys.",
      },
    ],
  }),
  component: Home,
});

type RideType = "instant" | "daily" | "long";

const rideTypes: {
  id: RideType;
  tag: string;
  title: string;
  subtitle: string;
  Icon: typeof Zap;
}[] = [
  { id: "instant", tag: "NOW", title: "Instant", subtitle: "Match in minutes", Icon: Zap },
  { id: "daily", tag: "COMMUTE", title: "Daily", subtitle: "Office / college route", Icon: Briefcase },
  { id: "long", tag: "PLANNED", title: "Long Distance", subtitle: "City to city journeys", Icon: Plane },
];

const matches = [
  { name: "Aarav S.", from: "Bandra", to: "BKC", rating: 4.9, seats: 2, eta: 4, price: 85 },
  { name: "Meera K.", from: "Andheri", to: "Powai", rating: 4.8, seats: 1, eta: 7, price: 120 },
  { name: "Rohan P.", from: "Worli", to: "Lower Parel", rating: 5.0, seats: 3, eta: 2, price: 60 },
];

function Home() {
  const [selected, setSelected] = useState<RideType>("instant");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md px-5 pt-6 pb-32">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-full bg-gradient-to-br from-primary/70 to-primary/30 ring-2 ring-primary/40" />
            <div>
              <p className="text-xs text-muted-foreground">Good evening</p>
              <p className="text-base font-semibold">
                Aanya <span className="text-primary">✨</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconBtn><Bell className="size-5" /></IconBtn>
            <IconBtn><MessageCircle className="size-5" /></IconBtn>
          </div>
        </header>

        {/* Hero */}
        <p className="mt-7 text-xs font-semibold tracking-[0.2em] text-primary">WHERE TO TODAY?</p>
        <h1 className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight">
          Travel smarter,
          <br />
          together.
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          <Pill><Users className="size-3.5" />12,400+ riders</Pill>
          <Pill><ShieldCheck className="size-3.5" />ID verified</Pill>
        </div>

        {/* Ride type */}
        <section className="mt-7">
          <h2 className="mb-3 text-lg font-semibold">Choose ride type</h2>
          <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {rideTypes.map((r) => {
              const active = selected === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelected(r.id)}
                  style={
                    active
                      ? {
                          background:
                            "color-mix(in oklab, var(--color-primary) 18%, var(--color-card))",
                          borderColor: "var(--color-primary)",
                          boxShadow:
                            "0 10px 30px -12px color-mix(in oklab, var(--color-primary) 45%, transparent)",
                        }
                      : undefined
                  }
                  className={`relative flex h-44 min-w-[10.5rem] shrink-0 snap-start flex-col justify-between rounded-3xl border p-4 text-left transition ${
                    active ? "border-primary" : "border-border bg-card/60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium tracking-wider text-muted-foreground">
                      {r.tag}
                    </span>
                    <span
                      className={`flex size-9 items-center justify-center rounded-full ${
                        active ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      <r.Icon className="size-4" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xl font-semibold leading-tight">{r.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{r.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Search card */}
        <section className="mt-5 rounded-3xl bg-card p-5">
          <div className="relative">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <span className="size-3 rounded-full bg-foreground" />
                <span className="my-1 h-8 w-px bg-border" />
                <span className="size-3 rounded-full bg-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <p className="text-[10px] font-medium tracking-wider text-muted-foreground">PICKUP</p>
                  <p className="text-base font-semibold">Bandra West, Mumbai</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-[10px] font-medium tracking-wider text-muted-foreground">DROP</p>
                  <p className="text-base text-muted-foreground">Where are you going?</p>
                </div>
              </div>
              <button className="mt-1 flex size-10 items-center justify-center rounded-full bg-secondary">
                <ArrowUpDown className="size-4" />
              </button>
            </div>
          </div>

          {selected !== "instant" && (
            <button className="mt-4 flex w-full items-center justify-between rounded-2xl bg-secondary/60 px-4 py-3 text-left">
              <span className="flex items-center gap-2 text-sm">
                <Calendar className="size-4 text-primary" />
                {selected === "daily" ? "Today, 6:30 PM" : "Sat, May 10 · 8:00 AM"}
              </span>
              <span className="text-muted-foreground">›</span>
            </button>
          )}

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 font-semibold text-background">
            <Search className="size-4" />
            Find a match
          </button>
        </section>

        {/* Quick chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["Office", "Airport", "Home", "Mall"].map((c) => (
            <button
              key={c}
              className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/90"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Nearby matches */}
        <section className="mt-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-lg font-semibold">Nearby matches</h2>
              <p className="text-xs text-muted-foreground">Live · within 2km of you</p>
            </div>
            <button className="text-sm font-medium text-primary">See all</button>
          </div>
          <div className="mt-3 space-y-3">
            {matches.map((m) => (
              <article
                key={m.name}
                className="flex items-center gap-4 rounded-2xl bg-card p-4"
              >
                <div className="size-12 rounded-full bg-gradient-to-br from-primary/60 to-primary/20" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold truncate">{m.name}</p>
                    <span className="flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">
                      <BadgeCheck className="size-3 text-primary" /> VERIFIED
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {m.from} → {m.to}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Star className="size-3 fill-primary text-primary" />
                    {m.rating.toFixed(1)} · {m.seats} seats · ETA {m.eta} min
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold">₹{m.price}</p>
                  <p className="text-[10px] text-muted-foreground">split</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </main>
  );
}

function IconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground">
      {children}
    </button>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
