"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayerStatsModal } from "./player-stats-modal";

export function PlayerStatsToolbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>View Player Stats</Button>
      <PlayerStatsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
