import { TileProps } from "@/components/custom/tile";
import type { FAQItem } from "@/components/custom/faq";

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

export const PERSONAL_TRAINING_TILES_LIST: TileProps[] = [
  {
    title: "Dopasowany plan treningowy",
    backgroundImageUrl: "/personal-training/tailored-plan.jpg",
  },
  {
    title: "Dedykowana aplikacja śledząca progres",
    backgroundImageUrl: "/personal-training/dedicated-app.jpg",
  },
  {
    title: "Trening w wyjątkowej atmosferze bez tłoku i anonimowości",
    backgroundImageUrl: "/personal-training/training-atmosphere.jpg",
  },
  {
    title:
      "Profesjonalnie dobrany sprzęt, który pozwala trenować efektywnie i bezpiecznie",
    backgroundImageUrl: "/personal-training/professional-equipment.jpg",
  },
];

export const PERSONAL_TRAINING_FAQ_ITEMS: FAQItem[] = [
  {
    question: "Czy pierwszy trening jest darmowy?",
    answer:
      "Nie. Pierwszy trening to płatna konsultacja treningowa, która pełni rolę wstępnej analizy i próby.",
  },
  {
    question: "Jak długo trwa trening personalny?",
    answer: "Od 45 do 90 minut, w zależności od planu i przebiegu sesji.",
  },
  {
    question: "Czy oferujecie pakiety treningowe?",
    answer: "Tak. Oferujemy pakiety treningowe.",
  },
  {
    question: "Czy mogę wybrać trenera?",
    answer:
      "Tak. Możesz wybrać trenera prowadzącego spośród dostępnych w klubie.",
  },
  {
    question: "Jak często powinienem trenować personalnie?",
    answer:
      "Najlepsze efekty uzyskasz trenując od 2 do 4 razy w tygodniu, w zależności od celu i możliwości.",
  },
  {
    question: "Co jeśli się spóźnię na trening personalny?",
    answer:
      "Maksymalne spóźnienie wynosi 15 minut. Później trening uznaje się za wykorzystany.",
  },
  {
    question: "Czy mogę odwołać trening personalny w ostatniej chwili?",
    answer:
      "Rezerwację treningu personalnego można odwołać najpóźniej 24 godziny przed rozpoczęciem.",
  },
  {
    question: "Co jeśli zapomnę odwołać rezerwacji?",
    answer:
      "Powtarzające się nieodwoływanie rezerwacji może skutkować czasową blokadą możliwości rezerwacji.",
  },
  {
    question: "Czy mogę trenować z własnym trenerem?",
    answer:
      "Nie. Prowadzenie treningów personalnych na terenie klubu możliwe jest wyłącznie za zgodą właściciela.",
  },
  {
    question: "Jak powinienem się przygotować do treningu?",
    answer:
      "Zalecany jest wygodny strój sportowy i czyste, zmienne obuwie treningowe.",
  },
  {
    question: "Co jeśli kupię pakiet i zachoruję?",
    answer: (
      <div>
        <p>
          W przypadku krótkiej choroby lub nieobecności możesz wykorzystać
          niewykorzystane treningi w okresie ważności pakietu.
        </p>
        <ul className="faq-list">
          <li>
            Pakiet 8 lub 12 treningów jest ważny 2 miesiące od daty zakupu.
          </li>
          <li>Pakiet 16 treningów jest ważny 3 miesiące od daty zakupu.</li>
        </ul>
      </div>
    ),
  },
];
