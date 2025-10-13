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
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Team</TableHead>
          <TableHead>P</TableHead>
          <TableHead>W</TableHead>
          <TableHead>D</TableHead>
          <TableHead>L</TableHead>
          <TableHead>GF</TableHead>
          <TableHead>GA</TableHead>
          <TableHead>Pts</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {footballTableData.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="text-blue-500">{row.team}</TableCell>
            <TableCell>{row.p}</TableCell>
            <TableCell>{row.w}</TableCell>
            <TableCell>{row.d}</TableCell>
            <TableCell>{row.l}</TableCell>
            <TableCell>{row.gf}</TableCell>
            <TableCell>{row.ga}</TableCell>
            <TableCell>{row.pts}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
