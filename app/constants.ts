export const PREFERRED_HOURS_OPTIONS = [
  "6-9",
  "9-12",
  "12-16",
  "16-20",
] as const;

export const PREFERRED_HOURS_OPTIONS_LABELS: Record<
  (typeof PREFERRED_HOURS_OPTIONS)[number],
  string
> = {
  "6-9": "Rano (6:00 - 9:00)",
  "9-12": "Przed południem (9:00 - 12:00)",
  "12-16": "Po południu (12:00 - 16:00)",
  "16-20": "Wieczór (16:00 - 20:00)",
};

export const PREFERRED_COOPERATION_PERIOD_OPTIONS = [
  "1m",
  "3m",
  "6m",
  "12m",
] as const;

export const PREFERRED_COOPERATION_PERIOD_OPTIONS_LABELS: Record<
  (typeof PREFERRED_COOPERATION_PERIOD_OPTIONS)[number],
  string
> = {
  "1m": "1 miesiąc",
  "3m": "3 miesiące",
  "6m": "6 miesięcy",
  "12m": "12 miesięcy",
};
