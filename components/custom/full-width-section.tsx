import { cn } from "@/lib/utils";

export interface FullWidthSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function FullWidthSection({
  title,
  children,
  className,
}: FullWidthSectionProps) {
  return (
    <div
      className={cn(
        "mb-10 items-start pr-6 md:mb-16 md:flex lg:mb-20 lg:pr-16",
        className,
      )}
    >
      <h3 className="mb-6 basis-1/3 text-4xl font-bold md:text-5xl lg:basis-2/5 lg:text-6xl">
        {title}
      </h3>
      <div className="basis-2/3 lg:basis-3/5">{children}</div>
    </div>
  );
}
