import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FixturesToolbar } from "./fixtures-toolbar";
import { ScrollArea } from "./ui/scroll-area";

export function FixturesModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Fixtures & Results</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-3xl">
        <DialogHeader>
          <DialogTitle>Fixtures & Results</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh]">
          <FixturesToolbar />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
