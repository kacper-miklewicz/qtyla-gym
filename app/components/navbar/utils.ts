const MENU_ITEMS = [
  { label: "o klubie", sectionId: "about" },
  { label: "treningi", sectionId: "treningi", isLink: true },
  { label: "członkowstwo", sectionId: "czlonkowstwo", isLink: true },
  { label: "grafik", sectionId: "schedule" },
  { label: "kontakt", sectionId: "footer" },
];

export const getMenuItems = (pathname: string) => {
  if (pathname === "/") {
    return MENU_ITEMS;
  }

  return MENU_ITEMS.filter((item) => item.isLink);
};
