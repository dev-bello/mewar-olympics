import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Player } from "@/lib/sports-data";

interface PlayerModalProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PlayerModal({ player, isOpen, onClose }: PlayerModalProps) {
  if (!player) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Player Details</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-6 py-4">
          <Avatar className="w-24 rounded-xl h-24 border">
            <AvatarImage src={player.passportImage} alt={player.name} />
            <AvatarFallback>
              {player.name
                .split(" ")
                .map((n) => n)
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">{player.name}</h3>
            <p className="text-muted-foreground">{player.position}</p>
            <p className="text-md font-bold text-primary">
              #{player.jerseyNumber}
            </p>
            <p className="text-xs text-muted-foreground">
              {player.level} {player.level === "Staff" ? "" : "Level"}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
