"use client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Sport, Player } from "@/lib/sports-data";
import { Users, Copyright } from "lucide-react";
import { useState } from "react";
import { PlayerModal } from "./player-modal";

interface TeamsSectionProps {
  sport: Sport;
}

export function TeamsSection({ sport }: TeamsSectionProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayerClick = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
  };

  return (
    <>
      <div
        id="teams"
        className="animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className="flex items-center gap-4 mb-8">
          <sport.icon className="w-10 h-10 text-primary" />
          <div>
            <h3 className="text-4xl font-bold tracking-tight">{sport.name}</h3>
            <p className="text-muted-foreground">{sport.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sport.teams.map((team) => (
            <Card
              key={team.id}
              className="p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold mb-1">{team.name}</h4>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {team.players.length}{" "}
                    {team.players.length === 1 ? "Player" : "Players"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  Team Roster
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {team.players.map((player, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                      onClick={() => handlePlayerClick(player)}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {player.isCaptain && (
                            <Copyright className="w-5 h-5 text-primary" />
                          )}
                          <p
                            className={`font-medium truncate ${
                              player.isCaptain ? "font-bold text-lg" : ""
                            }`}
                          >
                            {player.name}
                          </p>
                          <span
                            className={`w-2 h-2 rounded-full ${
                              player.registered ? "bg-green-500" : "bg-red-500"
                            }`}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {player.position}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <PlayerModal
        player={selectedPlayer}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
