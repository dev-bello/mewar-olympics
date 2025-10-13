"use client"

import { useState } from "react"
import { SportCard } from "@/components/sport-card"
import { TeamsSection } from "@/components/teams-section"
import { sportsData } from "@/lib/sports-data"

export function SportsGrid() {
  const [selectedSport, setSelectedSport] = useState<string | null>(null)

  return (
    <section id="sports" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 tracking-tighter">SPORTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sportsData.map((sport) => (
            <SportCard
              key={sport.id}
              sport={sport}
              isSelected={selectedSport === sport.id}
              onClick={() => setSelectedSport(sport.id)}
            />
          ))}
        </div>

        {selectedSport && <TeamsSection sport={sportsData.find((s) => s.id === selectedSport)!} />}
      </div>
    </section>
  )
}
