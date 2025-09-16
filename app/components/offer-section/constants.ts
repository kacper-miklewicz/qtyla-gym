import { TileProps } from "@/components/custom/tile";

export const OFFER_TILES: Record<string, TileProps> = {
  membership: {
    title: "Członkostwo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae dictum sem enim nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    backgroundImageUrl: "/offer/membership.jpg",
    buttonText: "Tekst",
    isLink: true,
    linkUrl: "/czlonkowstwo",
  },
  personalTraining: {
    title: "Trening personalny",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae dictum sem enim nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    backgroundImageUrl: "/offer/online-cooperation.jpg",
    buttonText: "Tekst",
    isLink: true,
    linkUrl: "/trening-personalny",
  },
  semiPersonalTraining: {
    title: "Trening semipersonalny",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae dictum sem enim nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    backgroundImageUrl: "/offer/transform.jpg",
    buttonText: "Tekst",
  },
  transform: {
    title: "Transform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae dictum sem enim nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    backgroundImageUrl: "/offer/personal-training.jpg",
    buttonText: "Tekst",
    isLink: true,
    linkUrl: "/transform",
  },
  onlineCooperation: {
    title: "Współpraca online",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae dictum sem enim nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    backgroundImageUrl: "/offer/semipersonal-training.jpg",
    buttonText: "Tekst",
  },
  events: {
    title: "Eventy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae dictum sem enim nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    backgroundImageUrl: "/offer/events.jpg",
    inProgress: true,
  },
  wellness: {
    title: "Welness",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, vitae dictum sem enim nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    backgroundImageUrl: "/offer/wellness.jpg",
    inProgress: true,
  },
};
