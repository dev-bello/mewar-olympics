"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Sport } from "@/lib/sports-data";

interface SportCardProps {
  sport: Sport;
  isSelected: boolean;
  onClick: () => void;
}

export function SportCard({ sport, isSelected, onClick }: SportCardProps) {
  return (
    <Card
      className={`relative overflow-hidden cursor-pointer transition-all hover:scale-105 ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
    >
      <div className="relative h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${sport.image}')`,
            filter: "brightness(0.5)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 mb-3">
            <sport.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mb-2 tracking-tight">
            {sport.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {sport.description}
          </p>
          <Button
            variant={isSelected ? "default" : "outline"}
            size="sm"
            className="w-full font-bold"
          >
            {isSelected ? "VIEWING" : "VIEW TEAMS"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
