import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FixturesToolbar } from "./fixtures-toolbar";

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
        <FixturesToolbar />
      </DialogContent>
    </Dialog>
  );
}
