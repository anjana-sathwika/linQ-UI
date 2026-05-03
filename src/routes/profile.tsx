import React from "react";
import { BottomNav } from "@/components/bottom-nav";
import { useTheme, type Theme } from "@/lib/theme";
import { BadgeCheck, ChevronRight, Moon, Sun, Sparkles, Settings, CreditCard, Shield, LogOut, Leaf, Gem, Flower } from "lucide-react";

const themes: { id: Theme; label: string; desc: string; Icon: typeof Sun; swatch: string }[] = [
  { id: "light", label: "Light", desc: "White & blue", Icon: Sun, swatch: "linear-gradient(135deg,#ffffff,#3b82f6)" },
  { id: "dark", label: "Dark", desc: "Gold on charcoal", Icon: Moon, swatch: "linear-gradient(135deg,#1a1a22,#e5b769)" },
  { id: "royal", label: "Royal", desc: "Navy & sapphire", Icon: Sparkles, swatch: "linear-gradient(135deg,#0a1633,#6aa3ff)" },
  { id: "fiverr", label: "Fiverr", desc: "White & green", Icon: Leaf, swatch: "linear-gradient(135deg,#ffffff,#1dbf73)" },
  { id: "sapphire", label: "Sapphire", desc: "White & royal blue", Icon: Gem, swatch: "linear-gradient(135deg,#ffffff,#1e3aef)" },
  { id: "rose", label: "Rose", desc: "White & coral", Icon: Flower, swatch: "linear-gradient(135deg,#ffffff,#ef4444)" },
];

function Profile() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md px-5 pt-8 pb-32">
        <h1 className="text-3xl font-bold">Profile</h1>

        {/* Identity card */}
        <section className="mt-5 flex items-center gap-4 rounded-3xl bg-card p-5">
          <div className="size-16 rounded-full bg-gradient-to-br from-primary/70 to-primary/20 ring-2 ring-primary/40" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold">Anjana D.</p>
              <BadgeCheck className="size-4 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">4.9 ★ · 84 trips</p>
          </div>
          <button className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">Edit</button>
        </section>

        {/* Appearance */}
        <section className="mt-7">
          <h2 className="mb-3 text-sm font-semibold text-muted-foreground">APPEARANCE</h2>
          <div className="grid grid-cols-3 gap-3">
            {themes.map((t) => {
              const active = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-3 text-center transition ${
                    active ? "border-primary bg-card" : "border-border bg-card/60"
                  }`}
                >
                  <span
                    className="size-12 rounded-full ring-2 ring-border"
                    style={{ background: t.swatch }}
                  />
                  <span className="text-sm font-semibold">{t.label}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">{t.desc}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Menu */}
        <section className="mt-7 overflow-hidden rounded-2xl bg-card">
          {[
            { Icon: CreditCard, label: "Payments" },
            { Icon: Shield, label: "Safety & verification" },
            { Icon: Settings, label: "Preferences" },
            { Icon: LogOut, label: "Sign out" },
          ].map((m, i, arr) => (
            <button
              key={m.label}
              className={`flex w-full items-center gap-4 px-4 py-4 text-left ${
                i < arr.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-secondary">
                <m.Icon className="size-4" />
              </span>
              <span className="flex-1 font-medium">{m.label}</span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </button>
          ))}
        </section>
      </div>
      <BottomNav />
    </main>
  );
}

export default Profile;
