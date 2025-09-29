import { isExternal } from "util/types";

const MENU_ITEMS = [
  { label: "o klubie", sectionId: "about" },
  { label: "treningi", sectionId: "offer" },
  { label: "członkostwo", sectionId: "czlonkostwo", isLink: true },
  {
    label: "grafik",
    isLink: true,
    isExternal: true,
    href: "https://app.fitssey.com/qtylaclub",
  },
  { label: "kontakt", sectionId: "footer" },
];

export const getMenuItems = (pathname: string) => {
  if (pathname === "/") {
    return MENU_ITEMS;
  }

  return MENU_ITEMS.map((item) => {
    if (item.isLink) {
      return item;
    }

    return {
      ...item,
      sectionId: `/#${item.sectionId}`,
      isLink: true,
    };
  });
};
