import { cn } from "@/lib/utils";

interface TileDecorationProps {
  text: string;
  className?: string;
}

const TileDecoration = ({ text, className }: TileDecorationProps) => {
  return (
    <div className={cn("w-60 px-3 py-2 text-center text-nowrap", className)}>
      {text}
    </div>
  );
};

export { TileDecoration };
