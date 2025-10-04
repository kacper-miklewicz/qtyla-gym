export type Rule = {
  title: string;
  items?: Rule[];
};

export const RULES: Rule[] = [
  {
    title: "Członkostwo",
    items: [
      {
        title:
          "Członkostwo w QTYLA Training Club jest limitowane – liczba miejsc jest ograniczona, aby zachować kameralny charakter i najwyższy komfort treningu.",
      },
      {
        title: "Członkostwo opiera się na miesięcznej subskrypcji, która",
        items: [
          {
            title:
              "umożliwia wejście do klubu i korzystanie ze slotów treningowych w ramach dostępnych godzin,",
          },
          {
            title:
              "daje dostęp do przestrzeni treningowej oraz społeczności QTYLA.",
          },
        ],
      },
      {
        title:
          "Subskrypcja nie obejmuje treningów personalnych, zajęć grupowych ani programów specjalnych (np. Transform) – są one płatne dodatkowo.",
      },
      {
        title: "Aby uzyskać członkostwo należy",
        items: [
          { title: "złożyć zgłoszenie i zaakceptować regulamin," },
          { title: "opłacić subskrypcję," },
          { title: "aktywnie korzystać z aplikacji rezerwacyjnej." },
        ],
      },
      {
        title:
          "Klub zastrzega sobie prawo do selekcji członków i prowadzenia listy oczekujących.",
      },
      {
        title:
          "Klub może także organizować wydarzenia otwarte dla osób spoza grona członków.",
      },
    ],
  },
  {
    title: "Zasady ogólne",
    items: [
      {
        title:
          "Dostęp do klubu mają wyłącznie osoby z aktywnym członkostwem oraz ważną rezerwacją w aplikacji.",
      },
      { title: "Brak rezerwacji = brak dostępu." },
      {
        title: "Obiekt jest monitorowany w celu zapewnienia bezpieczeństwa.",
      },
      {
        title: "Slot treningowy trwa 1 godz. 45 min + 15 min buforu.",
      },
      {
        title: "Limity wejść służą zachowaniu komfortu i jakości.",
      },
      {
        title: "Aplikacja i zapisy",
        items: [
          {
            title:
              "Każdy członek ma obowiązek rezerwować slot poprzez aplikację.",
          },
          {
            title:
              "Wejście bez rezerwacji jest naruszeniem zasad – nawet z kartą.",
          },
          {
            title:
              "Klub nie jest czynny 24/7 – dostęp tylko w wyznaczonych godzinach.",
          },
        ],
      },
      {
        title: "Monitoring i bezpieczeństwo",
        items: [
          {
            title:
              "Teren klubu (w tym wejście, sala treningowa, korytarz, strefy wspólne i recepcja) jest objęty całodobowym monitoringiem wizyjnym w celu zapewnienia bezpieczeństwa członków, ochrony mienia oraz egzekwowania zasad regulaminu.",
          },
          {
            title:
              "Nagrania mogą być wykorzystywane w przypadku naruszeń regulaminu, szkód majątkowych, zagrożeń zdrowia lub zgłoszeń spornych sytuacji.",
          },
          {
            title: "Monitoring nie obejmuje szatni, pryszniców ani toalet.",
          },
        ],
      },
    ],
  },
  {
    title: "Etykieta klubowa",
    items: [
      {
        title: "Każdy członek zobowiązany jest do",
        items: [
          { title: "okazywania szacunku innym osobom i trenerom," },
          { title: "korzystania z czystego obuwia zmiennego," },
          { title: "odkładania sprzętu na miejsce," },
          { title: "nieblokowania sprzętu bez użycia," },
          { title: "utrzymywania porządku w sali i szatniach," },
          { title: "unikania wulgaryzmów, agresji, telefonów i hałasu," },
          { title: "wspierania innych i tworzenia pozytywnej atmosfery," },
          { title: "stosowania się do zaleceń trenerów." },
        ],
      },
      {
        title: "Strój i higiena",
        items: [
          {
            title: "Obowiązuje trening w koszulce lub topie zakrywającym tors.",
          },
          {
            title:
              "Zakaz ćwiczenia bez koszulki wynika z troski o higienę, profesjonalizm i komfort innych.",
          },
        ],
      },
      {
        title: "Jedzenie i napoje",
        items: [
          {
            title: "Dozwolone są wyłącznie napoje w zakręcanych butelkach.",
          },
          {
            title: "Spożywanie jedzenia na sali treningowej jest zabronione.",
          },
        ],
      },
      {
        title: "Porządek po sobie",
        items: [
          {
            title:
              "Po zakończeniu treningu należy odłożyć obciążenia, hantle, gumy, akcesoria, butelki, ręczniki, magnezję i inne używane rzeczy.",
          },
          {
            title:
              "W przypadku rażących naruszeń regulamin lub członkostwo może zostać zakończone bez zwrotu opłat.",
          },
        ],
      },
    ],
  },
  {
    title: "Karta klubowa i dostęp",
    items: [
      { title: "Karta klubowa jest osobista." },
      {
        title:
          "Przekazanie karty innej osoby skutkuje natychmiastowym zakończeniem członkostwa.",
      },
      { title: "Zgubienie karty = koszt wydania nowej 100 zł." },
      {
        title: "Członkostwo uprawnia do jednego wejścia na slot dziennie.",
      },
      {
        title:
          "Można dodatkowo uczestniczyć w treningu personalnym lub grupowym (z rezerwacją).",
      },
      { title: "Klub może wymagać potwierdzenia tożsamości." },
      {
        title: "Zakaz wpuszczania osób nieupoważnionych",
        items: [
          {
            title:
              "Zabronione jest otwieranie drzwi osobom bez aktywnej karty i rezerwacji.",
          },
          {
            title:
              "Dotyczy to również członków, którzy zapomnieli karty (mogą wejść tylko po zgłoszeniu właścicielowi/trenerowi).",
          },
          {
            title:
              "Wpuszczanie „na słowo”, pod cudzą rezerwację lub pozostawianie otwartych drzwi skutkuje zakończeniem członkostwa bez zwrotu opłat.",
          },
          {
            title:
              "Zabronione jest blokowanie drzwi lub uniemożliwianie ich zamknięcia.",
          },
        ],
      },
    ],
  },
  {
    title: "Rezerwacje i treningi",
    items: [
      {
        title:
          "Rezerwację slotu można odwołać maksymalnie 2 godziny przed rozpoczęciem.",
      },
      {
        title:
          "Zajęcia grupowe – 6 godzin przed, trening personalny – 24 godziny przed.",
      },
      { title: "Po czasie rezerwacja przepada." },
      {
        title:
          "Przy pełnych zajęciach można dopisać się na listę oczekujących.",
      },
      { title: "Obowiązuje własny ręcznik." },
      {
        title:
          "Sprzęt należy używać zgodnie z przeznaczeniem i dbać o jego stan.",
      },
      {
        title: "Limit nieodwołanych rezerwacji",
        items: [
          {
            title:
              "Więcej niż 3 nieodwołane rezerwacje w miesiącu może skutkować blokadą zapisów.",
          },
        ],
      },
      {
        title: "Spóźnienia",
        items: [
          {
            title:
              "Na zajęcia grupowe nie można wejść po 10 minutach od startu.",
          },
          {
            title:
              "Na trening personalny maksymalne spóźnienie to 15 minut – po tym trening przepada.",
          },
        ],
      },
      {
        title: "Zajęcia grupowe",
        items: [
          {
            title:
              "Uczestnictwo w zajęciach grupowych wymaga aktywnej rezerwacji w aplikacji oraz opłacenia wejścia zgodnie z cennikiem.",
          },
          {
            title:
              "Liczba miejsc na zajęciach jest ograniczona – brak rezerwacji oznacza brak możliwości udziału.",
          },
          {
            title:
              "Klub zastrzega sobie prawo do zmiany godzin, prowadzącego lub formy zajęć.",
          },
          {
            title:
              "W przypadku spóźnienia powyżej 10 minut wejście jest niedozwolone.",
          },
          {
            title:
              "Zajęcia mogą zostać odwołane przy niewystarczającej liczbie zapisanych osób (np. mniej niż 3 osoby) – informacja zostanie przekazana przez aplikację lub SMS.",
          },
          {
            title:
              "Sprzęt używany podczas zajęć należy odłożyć na miejsce po zakończeniu treningu.",
          },
          {
            title:
              "Klub może wprowadzić różne formaty zajęć, a udział osób spoza grona członków jest możliwy tylko za zgodą właściciela.",
          },
        ],
      },
    ],
  },
  {
    title: "Bezpieczeństwo i higiena",
    items: [
      { title: "Trening odbywa się na własną odpowiedzialność." },
      {
        title:
          "Zabronione jest trenowanie w klapkach, boso (poza strefami do tego przeznaczonymi) i w nieodpowiednim stroju.",
      },
      {
        title:
          "Obowiązuje czyste obuwie zmienne – obuwie z zewnątrz jest zakazane.",
      },
      { title: "Sprzęt należy dezynfekować po użyciu." },
      {
        title:
          "Za celowe uszkodzenia lub zaniedbania członek może zostać obciążony kosztami naprawy lub wymiany.",
      },
      {
        title:
          "Zabronione jest wnoszenie alkoholu, używek i niebezpiecznych przedmiotów.",
      },
      {
        title:
          "Osoby pod wpływem alkoholu lub środków odurzających nie zostaną wpuszczone, a trening przepada.",
      },
      {
        title: "Apteczka i urazy",
        items: [
          { title: "Apteczka znajduje się w biurze klubu." },
          {
            title:
              "Każdy uraz należy niezwłocznie zgłosić właścicielowi/trenerowi.",
          },
          {
            title:
              "W nagłych sytuacjach należy udzielić pomocy zgodnie z możliwościami i powiadomić obsługę.",
          },
        ],
      },
      {
        title: "System audio",
        items: [
          {
            title:
              "Korzystanie z nagłośnienia lub zmiana muzyki jest dozwolona wyłącznie za zgodą właściciela/trenera.",
          },
          {
            title:
              "Podłączanie własnych urządzeń do systemu audio jest zabronione.",
          },
        ],
      },
    ],
  },
  {
    title: "Szatnie i rzeczy osobiste",
    items: [
      { title: "Rzeczy należy przechowywać w szafkach." },
      {
        title:
          "Pozostawianie przedmiotów poza szafkami lub na dłużej niż czas treningu jest zabronione.",
      },
      {
        title:
          "Nagrywanie i robienie zdjęć w szatniach i łazienkach jest zakazane.",
      },
      {
        title: "Klub nie odpowiada za rzeczy pozostawione na terenie obiektu.",
      },
      {
        title: "Toalety, prysznice i szatnie należy pozostawić w czystości.",
      },
      {
        title: "Lost & Found",
        items: [
          {
            title:
              "Rzeczy znalezione są przechowywane przez 7 dni, po czym mogą zostać zutylizowane lub przekazane na cele charytatywne.",
          },
        ],
      },
    ],
  },
  {
    title: "Płatności i członkostwo",
    items: [
      {
        title: "Subskrypcja opłacana jest z góry i odnawiana automatycznie.",
      },
      {
        title:
          "Rezygnację należy zgłosić mailowo – członkostwo kończy się z końcem opłaconego okresu.",
      },
      { title: "Opłaty nie podlegają zwrotowi." },
      {
        title:
          "W przypadku braku płatności członek ma 3 dni na uregulowanie należności – po tym dostęp jest blokowany, a miejsce może zostać przekazane kolejnej osobie.",
      },
      {
        title: "Zawieszenie członkostwa",
        items: [
          {
            title:
              "Raz w roku można zawiesić członkostwo na maksymalnie 1 miesiąc.",
          },
          {
            title: "Opłata wynosi 50% regularnej składki.",
          },
          {
            title: "Zawieszenie należy zgłosić minimum 7 dni wcześniej.",
          },
        ],
      },
      {
        title: "Okres próbny i etykieta",
        items: [
          {
            title: "Nowi członkowie przechodzą miesięczny okres próbny.",
          },
          {
            title:
              "Klub może nie przedłużyć członkostwa w przypadku naruszania regulaminu.",
          },
          {
            title:
              "Rażące naruszenie skutkuje natychmiastowym zakończeniem członkostwa.",
          },
        ],
      },
      {
        title: "Odpowiedzialność",
        items: [
          {
            title:
              "Klub nie odpowiada za urazy wynikające z łamania regulaminu lub niewłaściwego korzystania ze sprzętu.",
          },
          {
            title:
              "Członkowie odpowiadają za zatajenie przeciwwskazań zdrowotnych.",
          },
        ],
      },
    ],
  },
  {
    title: "Zdjęcia, nagrania i osoby trzecie",
    items: [
      {
        title:
          "Na terenie klubu mogą być wykonywane zdjęcia i nagrania promocyjne.",
      },
      {
        title:
          "Uczestnictwo oznacza zgodę na wykorzystanie wizerunku (chyba że zgłoszono sprzeciw).",
      },
      {
        title:
          "Nagrywanie przez członków jest dozwolone, jeśli nie narusza prywatności innych i nie przeszkadza w treningu.",
      },
      {
        title: "Osoby towarzyszące i dostęp",
        items: [
          {
            title:
              "Na sali mogą przebywać tylko członkowie lub osoby z ważną rezerwacją.",
          },
          {
            title: "Osoby towarzyszące mogą wejść tylko za zgodą właściciela.",
          },
          {
            title:
              "Wprowadzanie dzieci lub zwierząt jest zabronione, chyba że właściciel wyrazi indywidualną zgodę.",
          },
        ],
      },
    ],
  },
  {
    title: "Wiek uczestników",
    items: [
      {
        title: "Do klubu mogą dołączyć osoby od 18. roku życia.",
      },
      {
        title: "Młodsi zawodnicy wyłącznie pod opieką klubowego trenera.",
      },
    ],
  },
  {
    title: "Dane osobowe",
    items: [
      {
        title:
          "Dane członków są przetwarzane wyłącznie do realizacji usług klubu.",
      },
      {
        title: "Członkowie mają prawo wglądu i poprawiania swoich danych.",
      },
      {
        title: "Awarie systemu",
        items: [
          {
            title:
              "W przypadku problemów z aplikacją należy zgłosić to telefonicznie lub mailowo.",
          },
          {
            title: "Klub może ręcznie potwierdzić rezerwację.",
          },
        ],
      },
      {
        title: "Monitoring wizyjny",
        items: [
          {
            title:
              "Rejestracja obrazu odbywa się na podstawie prawnie uzasadnionego interesu właściciela (zapewnienie bezpieczeństwa, ochrona obiektu i mienia).",
          },
          {
            title:
              "Dane z monitoringu przechowywane są przez ograniczony czas i nie są udostępniane osobom trzecim, chyba że wymagają tego przepisy prawa.",
          },
        ],
      },
    ],
  },
  {
    title: "Postanowienia końcowe",
    items: [
      {
        title: "Korzystanie z klubu oznacza akceptację regulaminu.",
      },
      {
        title:
          "Klub może wprowadzać zmiany – informacje będą przekazywane mailowo i/lub przez aplikację.",
      },
      {
        title: "W sprawach nieuregulowanych decyduje właściciel.",
      },
      {
        title: "Konserwacje i wydarzenia",
        items: [
          {
            title: "Klub może czasowo wyłączyć strefy lub sprzęt.",
          },
          {
            title: "Informacje będą podawane z wyprzedzeniem.",
          },
        ],
      },
      {
        title: "Dni świąteczne i godziny działania",
        items: [
          {
            title:
              "Klub może być zamknięty w wybrane dni świąteczne lub zmieniać godziny otwarcia – komunikaty będą publikowane wcześniej.",
          },
        ],
      },
      {
        title: "Prawo interwencji",
        items: [
          {
            title:
              "Właściciel lub trener może poprosić o opuszczenie obiektu osobę naruszającą zasady – bez zwrotu opłat.",
          },
        ],
      },
    ],
  },
];
