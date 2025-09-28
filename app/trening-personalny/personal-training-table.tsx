import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function PersonalTrainingTable() {
  return (
    <div className="flex w-full max-w-6xl justify-center">
      <Table className="border text-xl">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Start</TableHead>
            <TableHead>Strong</TableHead>
            <TableHead>Limitless</TableHead>
            <TableHead>Konsultacja</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Liczba treningów</TableCell>
            <TableCell>8</TableCell>
            <TableCell>12</TableCell>
            <TableCell>16</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Z kartą klubową</TableCell>
            <TableCell>140 PLN / sesja</TableCell>
            <TableCell>130 PLN / sesja</TableCell>
            <TableCell>125 PLN / sesja</TableCell>
            <TableCell>150 PLN / sesja</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bez karty klubowej</TableCell>
            <TableCell>190 PLN / sesja</TableCell>
            <TableCell>180 PLN / sesja</TableCell>
            <TableCell>175 PLN / sesja</TableCell>
            <TableCell>200 PLN / sesja</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aplikacja treningowa</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Konsultacja fizjoterapeuty</TableCell>
            <TableCell>-</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>✔</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ważność pakietu</TableCell>
            <TableCell>2 miesiące</TableCell>
            <TableCell>2 miesiące</TableCell>
            <TableCell>3 miesiące</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
