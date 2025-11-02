import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { footballTableData } from "@/lib/fixtures-data";

export function FootballTable() {
  return (
    <div>
      <table className="w-full caption-bottom text-sm">
        <TableHeader>
          <TableRow>
            <TableHead>Team</TableHead>
            <TableHead>P</TableHead>
            <TableHead>W</TableHead>
            <TableHead>D</TableHead>
            <TableHead>L</TableHead>
            <TableHead>GF</TableHead>
            <TableHead>GA</TableHead>
            <TableHead>GD</TableHead>
            <TableHead>Pts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {footballTableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="text-blue-500 flex items-center">
                {index < 4 && (
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                )}
                {row.team}
              </TableCell>
              <TableCell>{row.p}</TableCell>
              <TableCell>{row.w}</TableCell>
              <TableCell>{row.d}</TableCell>
              <TableCell>{row.l}</TableCell>
              <TableCell>{row.gf}</TableCell>
              <TableCell>{row.ga}</TableCell>
              <TableCell>{row.gd}</TableCell>
              <TableCell>{row.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
      <div className="mt-4 text-xs text-gray-500">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span>Qualified for Semi-finals</span>
        </div>
        <p className="mt-2">
          Qualification is determined by points, then goal difference, then
          goals scored.
        </p>
      </div>
    </div>
  );
}
