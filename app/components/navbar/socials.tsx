import { cn } from "@/lib/utils";

import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export interface SocialsProps {
  variant: "mobile" | "desktop" | "universal";
}

const socialsItems = [
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/qtylaclub/",
  },
  {
    Icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61579487471098",
  },
  { Icon: FaEnvelope, href: "mailto:qtyla.club@gmail.com" },
];

export default function Socials({ variant }: SocialsProps) {
  return (
    <div
      className={cn({
        "mb-10 flex justify-center": variant === "mobile",
        "hidden lg:block": variant === "desktop",
        block: variant === "universal",
      })}
    >
      <ul className="flex items-center gap-6">
        {socialsItems.map(({ Icon, href }, index) => (
          <li key={index}>
            <Button variant="link" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="size-8 sm:size-6 xl:size-8" />
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
