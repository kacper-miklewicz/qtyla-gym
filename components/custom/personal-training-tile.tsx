import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import { cn } from "@/lib/utils";

import { TileProps } from "./tile";

export interface PersonalTrainingTileProps {
  label: string;
  sessionsPerWeek: number;
  totalPrice: number;
  trainingApp: boolean;
  physioConsultation: boolean;
  singleSession?: boolean;
  customDescription?: string;
  isDuo?: boolean;
  children?: React.ReactNode;
}

export const isPersonalTrainingTileProps = (
  obj: TileProps | PersonalTrainingTileProps,
): obj is PersonalTrainingTileProps =>
  typeof (obj as PersonalTrainingTileProps).totalPrice !== "undefined";

const WEEKS_IN_MONTH = 4;

const getIcon = (condition: boolean | undefined) =>
  condition ? FaCheck : IoCloseSharp;

function PersonalTrainingTile({
  label,
  sessionsPerWeek,
  totalPrice,
  trainingApp,
  physioConsultation,
  singleSession,
  customDescription,
  isDuo,
  children,
}: PersonalTrainingTileProps) {
  const sessionsPerMonth = sessionsPerWeek * WEEKS_IN_MONTH;
  const sessionsPerMonthText = singleSession
    ? ""
    : ` - ${sessionsPerMonth}x / miesiąc`;

  const pricePerSession = totalPrice / sessionsPerMonth / (isDuo ? 2 : 1);

  const trainingsVerb = sessionsPerWeek > 1 ? "treningi" : "trening";

  const pricePerSessionText = isDuo ? "zł / osoba / trening" : "zł / trening";

  const AppIcon = getIcon(trainingApp);
  const PhysioIcon = getIcon(physioConsultation);

  return (
    <div className="relative flex h-120 w-full flex-col items-center justify-between overflow-hidden rounded-lg border-1 px-6 py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2">{children}</div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-semibold">{`${label} ${sessionsPerMonthText}`}</p>
        <p className="text-2xl font-semibold">{`${totalPrice} zł`}</p>
        {
          <p
            className={cn("text-lg text-white/70", {
              invisible: singleSession,
            })}
          >{`${pricePerSession.toFixed(2)} ${pricePerSessionText}`}</p>
        }
      </div>
      <div className="text-center text-2xl">
        {customDescription ?? `${sessionsPerWeek} ${trainingsVerb} tygodniowo`}
      </div>
      <div className="text-xl">
        <p className="flex items-center gap-2">
          Aplikacja treningowa
          <AppIcon />
        </p>
        <p className="flex items-center gap-2">
          Konsultacja fizjoterapeuty
          <PhysioIcon />
        </p>
      </div>
    </div>
  );
}

export { PersonalTrainingTile };
