import { TileProps } from "@/components/custom/tile";

export const MEMBERSHIP_TILES_LIST: TileProps[] = [
  {
    title: "Limitowany dostęp do siłowni",
    description:
      "Trenujesz w kameralnej atmosferze, bez tłoku i kolejek do stanowisk. System slotów zapewnia komfort, przestrzeń i maksymalny fokus na treningu.",
    backgroundImageUrl: "/membership/gym-access.jpg",
  },
  {
    title: "Preferencyjne ceny i zniżki",
    description:
      "Jako klubowicz korzystasz ze specjalnych stawek na treningi personalne, semi-personalne, wyjazdy, campy i eventy. To realne oszczędności oraz pierwszeństwo w dostępie do nowych projektów.",
    backgroundImageUrl: "/membership/discounts.jpg",
  },
  {
    title: "Sprzęt i przestrzeń klasy premium",
    description:
      "Każdy element wyposażenia został starannie dobrany spośród najlepszych marek i rozwiązań. Nie ma tu przypadkowych maszyn ani kompromisów – tylko sprzęt z najwyższej półki, który gwarantuje bezpieczeństwo, efektywność i przyjemność z treningu.",
    backgroundImageUrl: "/membership/premium-equipment.jpg",
  },
  {
    title: "Wczesny dostęp do eventów i wydarzeń",
    description:
      "Klubowicze są zawsze na pierwszym miejscu – to oni jako pierwsi otrzymują możliwość zapisania się na treningowe campy, wyjazdy czy wyjątkowe wydarzenia organizowane przez QTYLA.",
    backgroundImageUrl: "/membership/early-events.jpg",
  },
  {
    title: "Karta członkowska",
    description:
      "Otrzymujesz fizyczną kartę QTYLA Club – Twój klucz do wejścia i znak rozpoznawczy przynależności do społeczności klubu.",
    backgroundImageUrl: "/membership/membership-card.jpg",
  },
  {
    title: "Wczesny dostęp do klubowego fizjoterapeuty",
    description:
      "Twoje zdrowie jest fundamentem rozwoju. Dlatego członkowie klubu mają pierwszeństwo w rezerwacji sesji fizjoterapeutycznych oraz specjalne warunki współpracy.",
    backgroundImageUrl: "/membership/physio.jpg",
  },
  {
    title: "Zamknięta grupa WhatsApp",
    description:
      "Dzięki zamkniętej grupie WhatsApp jesteś w stałym kontakcie z trenerami i innymi członkami klubu. To przestrzeń wymiany doświadczeń, wzajemnej motywacji i bieżących informacji o życiu klubu.",
    backgroundImageUrl: "/membership/whatsapp-group.jpg",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Jak zostać członkiem klubu?",
    answer: (
      <div>
        <p>Członkostwo jest limitowane. Aby dołączyć:</p>
        <ul className="faq-list">
          <li>wypełnij formularz zgłoszeniowy,</li>
          <li>zaakceptuj regulamin klubu,</li>
          <li>opłać subskrypcję członkowską.</li>
        </ul>
        <p>
          Po akceptacji otrzymasz swoją kartę klubową i dostęp do aplikacji
          rezerwacyjnej.
        </p>
      </div>
    ),
  },
  {
    question: "Jak długo trwa slot treningowy?",
    answer:
      "Slot treningowy trwa 1 godzinę 45 minut. Dodatkowo przewidziany jest 15-minutowy buffer na przebranie się przed i po treningu oraz przygotowanie sali dla kolejnych osób.",
  },
  {
    question: "Jak wygląda płatność?",
    answer:
      "Opłata pobierana jest automatycznie co miesiąc lub można opłacić wybrany okres z góry.",
  },
  {
    question: "Czy honorowany jest Multisport?",
    answer: "Nie. W QTYLA Training Club nie honorujemy kart typu Multisport.",
  },
  {
    question: "Czy mogę wykupić wejście jednorazowe?",
    answer:
      "Nie. QTYLA Training Club działa w modelu członkowskim, aby zachować wyjątkowy charakter i komfort treningu.",
  },
  {
    question: "Czy mogę zawiesić członkostwo?",
    answer:
      "Tak. Raz w roku możesz zamrozić członkostwo na maksymalnie 1 miesiąc. W tym czasie opłata wynosi 50% standardowej stawki.",
  },
  {
    question: "Czy mogę przenieść członkostwo na inną osobę?",
    answer: "Nie. Członkostwo jest osobiste.",
  },
  {
    question: "Co jeśli zgubię kartę klubową?",
    answer:
      "W przypadku zgubienia karty obowiązuje opłata karna 100 zł. Po jej uregulowaniu otrzymasz nową kartę klubową.",
  },
  {
    question: "Czy klub może zakończyć moje członkostwo?",
    answer:
      "Tak. W przypadku nieprzestrzegania regulaminu lub etykiety klubowej, klub zastrzega sobie prawo do nieprzedłużenia członkostwa lub jego natychmiastowego zakończenia.",
  },
  {
    question: "Czy mogę przyprowadzić znajomego?",
    answer:
      "Nie, chyba że klub organizuje wydarzenie otwarte lub właściciel wyrazi zgodę.",
  },
  {
    question: "Od jakiego wieku mogę korzystać z klubu?",
    answer:
      "Wejście do klubu jest możliwe od 18. roku życia. Osoby młodsze mogą trenować wyłącznie za zgodą właściciela.",
  },
  {
    question: "Czy klub może być zamknięty w święta?",
    answer:
      "Tak. Klub zastrzega sobie prawo do zamknięcia w wybrane dni świąteczne – informacja pojawi się z wyprzedzeniem.",
  },
  {
    question: "Czy mogę nagrywać filmy i zdjęcia w klubie?",
    answer:
      "Tak, pod warunkiem że nie naruszasz prywatności innych osób i nie zakłócasz treningu. Sesje komercyjne wymagają zgody klubu.",
  },
  {
    question: "Co jeśli uszkodzę sprzęt?",
    answer:
      "W przypadku celowego uszkodzenia lub rażącego zaniedbania, klub ma prawo obciążyć odpowiedzialną osobę kosztami naprawy lub wymiany.",
  },
];
