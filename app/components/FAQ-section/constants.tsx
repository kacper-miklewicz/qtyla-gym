import React from "react";
import LateAnswer from "./late-answer";
import HowToJoinAnswer from "./how-to-join-answer";

interface FAQItem {
  title: string;
  items: {
    question: string;
    answer: string | React.ReactNode;
  }[];
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    title: "Członkowstwo i subskrypcje",
    items: [
      {
        question: "Czy mogę wykupić wejście jednorazowe?",
        answer:
          "Nie. QTYLA Training Club działa w modelu członkowskim, aby zachować kameralny charakter i komfort treningu.",
      },
      {
        question: "Czy mogę zawiesić swoje członkostwo?",
        answer:
          "Tak. Raz w roku możesz zamrozić członkostwo na maksymalnie 1 miesiąc. W tym czasie opłata wynosi 50% standardowej stawki.",
      },
      {
        question: "Czy mogę przenieść swoje członkostwo na inną osobę?",
        answer: "Nie. Członkostwo jest osobiste.",
      },
      {
        question: "Czy klub może zakończyć moje członkostwo?",
        answer:
          "Tak. W przypadku nieprzestrzegania regulaminu lub etykiety klubowej, klub zastrzega sobie prawo do nieprzedłużenia członkostwa lub jego natychmiastowego zakończenia.",
      },
    ],
  },
  {
    title: "Rezerwacje i treningi",
    items: [
      {
        question: "Jak długo trwa slot treningowy?",
        answer: "Slot trwa 1 godz. 45 min, z dodatkowym 15-minutowym buforem.",
      },
      {
        question: "Co jeśli się spóźnię na zajęcia grupowe lub personalne?",
        answer: <LateAnswer />,
      },
      {
        question: "Co jeśli zapomnę odwołać rezerwacji?",
        answer:
          "Powtarzające się nieodwoływanie rezerwacji może skutkować czasową blokadą możliwości rezerwacji.",
      },
      {
        question: "Czy mogę odwołać trening personalny w ostatniej chwili?",
        answer:
          "Rezerwację treningu personalnego można odwołać najpóźniej 24 godziny przed rozpoczęciem.",
      },
    ],
  },
  {
    title: "Zasady i etykieta",
    items: [
      {
        question: "Czy muszę mieć zmienne obuwie?",
        answer:
          "Tak. Na terenie klubu obowiązuje korzystanie z czystego obuwia treningowego.",
      },
      {
        question: "Czy mogę trenować z własnym trenerem?",
        answer:
          "Nie. Prowadzenie treningów personalnych na terenie klubu możliwe jest wyłącznie za zgodą właściciela.",
      },
      {
        question: "Czy mogę nagrywać filmy i zdjęcia w klubie?",
        answer:
          "Tak, pod warunkiem że nie naruszasz prywatności innych osób i nie zakłócasz treningu. Sesje komercyjne wymagają zgody klubu.",
      },
      {
        question: "Co się stanie, jeśli uszkodzę sprzęt?",
        answer:
          "W przypadku celowego uszkodzenia lub rażącego zaniedbania, klub ma prawo obciążyć odpowiedzialną osobę kosztami naprawy lub wymiany.",
      },
      {
        question: "Jakie są zasady korzystania ze sprzętu?",
        answer:
          "Sprzęt należy użytkować zgodnie z przeznaczeniem, odkładać po zakończonym ćwiczeniu i dzielić się nim w duchu fair play.",
      },
    ],
  },
  {
    title: "Rzeczy osobiste i bezpieczeństwo",
    items: [
      {
        question: "Czy mogę zostawić rzeczy w klubie na dłużej?",
        answer: "Nie. Rzeczy można przechowywać tylko podczas treningu.",
      },
      {
        question: "Co jeśli zgubię coś w klubie?",
        answer: "Rzeczy znalezione przechowywane są w recepcji do 7 dni.",
      },
      {
        question: "Czy klub odpowiada za moje bezpieczeństwo podczas treningu?",
        answer:
          "Trening odbywa się na własną odpowiedzialność. Klub zapewnia bezpieczne warunki i sprawny sprzęt, ale nie odpowiada za urazy wynikające z nieprzestrzegania regulaminu.",
      },
    ],
  },
  {
    title: "Organizacja i godziny działania",
    items: [
      {
        question: "Jakie są godziny otwarcia klubu?",
        answer:
          "QTYLA Training Club jest otwarty codziennie w godzinach 6:00–22:00, z wyjątkiem wybranych dni świątecznych.",
      },
      {
        question: "Czy klub może być zamknięty w święta?",
        answer:
          "Tak. Klub zastrzega sobie prawo do zamknięcia w wybrane dni świąteczne – informacja pojawi się z wyprzedzeniem.",
      },
      {
        question: "Co zrobić, jeśli aplikacja rezerwacyjna nie działa?",
        answer:
          "Zgłoś problem telefonicznie lub mailowo. Klub potwierdzi rezerwację ręcznie lub wskaże dalsze kroki.",
      },
    ],
  },
  {
    title: "Goście i osoby towarzyszące",
    items: [
      {
        question: "Czy mogę przyprowadzić znajomego?",
        answer:
          "Nie, chyba że klub organizuje wydarzenie otwarte lub właściciel wyrazi zgodę.",
      },
      {
        question:
          "Czy moje dziecko może przebywać w klubie podczas mojego treningu?",
        answer:
          "Nie. Osoby towarzyszące mogą wejść na teren klubu wyłącznie za zgodą właściciela.",
      },
      {
        question: "Jak zostać członkiem klubu?",
        answer: <HowToJoinAnswer />,
      },
      {
        question: "Jak zapisać się na zajęcia lub slot treningowy?",
        answer:
          "Wszystkie rezerwacje odbywają się w aplikacji klubowej. Wybierasz slot, zajęcia grupowe lub trening personalny i potwierdzasz rezerwację online.",
      },
    ],
  },
];
