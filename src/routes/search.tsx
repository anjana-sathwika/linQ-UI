import { createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/bottom-nav";
import { Search as SearchIcon, MapPin } from "lucide-react";

export const Route = createFileRoute("/search")({
  head: () => ({ meta: [{ title: "Search — together." }] }),
  component: SearchPage,
});

function SearchPage() {
  const recent = ["Office — BKC", "Airport T2", "Powai Lake", "Phoenix Mall"];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-md px-5 pt-8 pb-32">
        <h1 className="text-3xl font-bold">Search</h1>
        <div className="mt-5 flex items-center gap-3 rounded-full bg-card px-4 py-3">
          <SearchIcon className="size-4 text-muted-foreground" />
          <input
            placeholder="Where to?"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <h2 className="mt-7 text-sm font-semibold text-muted-foreground">Recent</h2>
        <div className="mt-3 space-y-2">
          {recent.map((r) => (
            <button key={r} className="flex w-full items-center gap-3 rounded-2xl bg-card p-4 text-left">
              <div className="flex size-10 items-center justify-center rounded-full bg-secondary">
                <MapPin className="size-4 text-primary" />
              </div>
              <span className="font-medium">{r}</span>
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
