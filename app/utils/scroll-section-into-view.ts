export const scrollSectionIntoView = (sectionId: string, cb?: () => void) => {
  const section = document.getElementById(sectionId);

  if (cb) {
    cb();
  }

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
