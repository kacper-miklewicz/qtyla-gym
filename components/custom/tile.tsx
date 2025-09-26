"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { GoPlus } from "react-icons/go";

import { Button } from "../ui/button";

export interface TileProps {
  title: string;
  description?: string;
  backgroundImageUrl: string;
  inProgress?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  isLink?: boolean;
  linkUrl?: string;
  linkTarget?: HTMLAnchorElement["target"];
}

export default function Tile({
  title,
  description,
  backgroundImageUrl,
  inProgress,
  buttonText,
  onButtonClick,
  isLink,
  linkUrl,
  linkTarget,
}: TileProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    if (inProgress) return;

    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div
      className={`h-120 w-full overflow-hidden rounded-lg bg-cover bg-center`}
      onMouseEnter={() => {
        if (inProgress) return;
        setIsDescriptionExpanded(true);
      }}
      onMouseLeave={() => setIsDescriptionExpanded(false)}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div
        className={cn(
          "flex h-full flex-col justify-between bg-black/40 px-6 py-10 text-white transition-all duration-300",
          {
            "bg-black/55 backdrop-blur-xs":
              isDescriptionExpanded && !inProgress,
            "backdrop-blur-xs": inProgress,
          },
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-4 opacity-0 transition-all duration-300",
            {
              "opacity-100": isDescriptionExpanded || inProgress,
            },
          )}
        >
          {inProgress ? (
            <p className="translate-y-40 text-center text-2xl">
              Coming soon...
            </p>
          ) : (
            <p className="text-left">{description}</p>
          )}
          {buttonText &&
            (isLink ? (
              <Button asChild variant="outline" className="self-start">
                <Link
                  href={linkUrl!}
                  target={linkTarget}
                  rel="noopener noreferrer"
                >
                  {buttonText}
                </Link>
              </Button>
            ) : (
              <Button
                onClick={onButtonClick}
                variant="outline"
                className="self-start"
              >
                {buttonText}
              </Button>
            ))}
        </div>
        <div className="flex items-center justify-between">
          <p
            className={cn("text-2xl", {
              "text-white/40": inProgress,
            })}
          >
            {title}
          </p>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full sm:hidden"
            onClick={toggleDescription}
            disabled={inProgress}
          >
            <GoPlus
              size={20}
              className={cn("!h-6 !w-6 transition-all duration-300", {
                "rotate-45": isDescriptionExpanded,
              })}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
