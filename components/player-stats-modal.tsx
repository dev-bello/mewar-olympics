import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { topScorersData, cleanSheetsData } from "@/lib/fixtures-data";

interface PlayerStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlayerStatsModal({ isOpen, onClose }: PlayerStatsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-2xl h-[60vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Player Stats</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="top-scorers">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="top-scorers">Top Scorers</TabsTrigger>
            <TabsTrigger value="clean-sheets">Clean Sheets</TabsTrigger>
          </TabsList>
          <TabsContent value="top-scorers">
            <div className="grid gap-4">
              {topScorersData.map((player, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold">{player.name}</p>
                      <p className="text-sm text-gray-500">{player.team}</p>
                    </div>
                    <p className="font-bold">{player.goals} </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="clean-sheets">
            <div className="grid gap-4">
              {cleanSheetsData.map((player, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold">{player.name}</p>
                      <p className="text-sm text-gray-500">{player.team}</p>
                    </div>
                    <p className="font-bold">{player.matches} </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
