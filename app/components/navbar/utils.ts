const MENU_ITEMS = [
  { label: "o klubie", sectionId: "about" },
  { label: "treningi", sectionId: "offer" },
  { label: "członkostwo", sectionId: "czlonkostwo", isLink: true },
  { label: "grafik", sectionId: "schedule" },
  { label: "kontakt", sectionId: "footer" },
];

export const getMenuItems = (pathname: string) => {
  if (pathname === "/") {
    return MENU_ITEMS;
  }

  return MENU_ITEMS.map((item) => ({
    ...item,
    sectionId: `/#${item.sectionId}`,
    isLink: true,
  }));
};
