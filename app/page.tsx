import { Header } from "@/components/header";
import { SportsGrid } from "@/components/sports-grid";
import { Hero } from "@/components/hero";
import { FixturesModal } from "@/components/fixtures-modal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <FixturesModal />
      </div>
      <SportsGrid />
    </main>
  );
}
