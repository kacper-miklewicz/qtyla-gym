import { PERSONAL_TRAINING_OPTIONS } from "./constants";

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
            {PERSONAL_TRAINING_OPTIONS.map((option) => (
              <TableHead key={option.label}>{option.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Liczba treningów</TableCell>
            {PERSONAL_TRAINING_OPTIONS.map(({ trainingCount }) => (
              <TableCell key={trainingCount}>{trainingCount ?? "-"}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Z kartą klubową</TableCell>
            {PERSONAL_TRAINING_OPTIONS.map(
              ({ withClubCardPrice, trainingCount }) => (
                <TableCell key={withClubCardPrice}>
                  <p className="mb-1">
                    {withClubCardPrice
                      ? `${withClubCardPrice} PLN / sesja`
                      : "-"}
                  </p>
                  {trainingCount && (
                    <p className="text-sm text-white/50">
                      Koszt całkowity:&nbsp;
                      {withClubCardPrice
                        ? `${withClubCardPrice * trainingCount} PLN`
                        : "-"}
                    </p>
                  )}
                </TableCell>
              ),
            )}
          </TableRow>
          <TableRow>
            <TableCell>Bez karty klubowej</TableCell>
            {PERSONAL_TRAINING_OPTIONS.map(
              ({ withoutClubCardPrice, trainingCount }) => (
                <TableCell key={withoutClubCardPrice}>
                  <p className="mb-1">
                    {withoutClubCardPrice
                      ? `${withoutClubCardPrice} PLN / sesja`
                      : "-"}
                  </p>
                  {trainingCount && (
                    <p className="text-sm text-white/50">
                      Koszt całkowity:&nbsp;
                      {withoutClubCardPrice
                        ? `${withoutClubCardPrice * trainingCount} PLN`
                        : "-"}
                    </p>
                  )}
                </TableCell>
              ),
            )}
          </TableRow>
          <TableRow>
            <TableCell>Aplikacja treningowa</TableCell>
            {PERSONAL_TRAINING_OPTIONS.map(({ trainingApp, label }) => (
              <TableCell key={`${label}-training-app`}>
                {trainingApp ? "✔" : "-"}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Konsultacja fizjoterapeuty</TableCell>
            {PERSONAL_TRAINING_OPTIONS.map(({ physioConsultation, label }) => (
              <TableCell key={`${label}-physiotherapy-consultation`}>
                {physioConsultation ? "✔" : "-"}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Ważność pakietu</TableCell>
            {PERSONAL_TRAINING_OPTIONS.map(({ packageValidity, label }) => (
              <TableCell key={`${label}-package-validity`}>
                {packageValidity ?? "-"}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
