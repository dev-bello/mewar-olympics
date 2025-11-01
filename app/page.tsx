import { Header } from "@/components/header";
import { SportsGrid } from "@/components/sports-grid";
import { Hero } from "@/components/hero";
import { FixturesModal } from "@/components/fixtures-modal";
import { PlayerStatsToolbar } from "@/components/player-stats-toolbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8 flex gap-4">
        <FixturesModal />
        <PlayerStatsToolbar />
      </div>
      <SportsGrid />
    </main>
  );
}
