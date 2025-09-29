import { QTYLA_EMAIL } from "../constants";

import { scrollSectionIntoView } from "@/app/utils";

import { TileProps } from "@/components/custom/tile";

export const OFFER_TILES: Record<string, TileProps> = {
  membership: {
    title: "Członkostwo",
    description:
      "Dołącz do limitowanej społeczności QTYLA i trenuj w przestrzeni bez tłoku i chaosu. Zarezerwuj swój slot i ciesz się komfortem, jakością i wyjątkową atmosferą.",
    backgroundImageUrl: "/offer/membership.jpg",
    buttonText: "Dołącz",
    isLink: true,
    linkUrl: "/czlonkostwo",
  },
  personalTraining: {
    title: "Trening personalny",
    description:
      "Czas w pełni poświęcony tylko Tobie, w którym trener prowadzi Cię krok po kroku do Twoich celów. To najbardziej indywidualna i skuteczna forma treningu, gwarantująca bezpieczeństwo, pełne zaangażowanie i realne rezultaty.",
    backgroundImageUrl: "/offer/online-cooperation.jpg",
    buttonText: "Zapisz się",
    isLink: true,
    linkUrl: "/trening-personalny",
  },
  semiPersonalTraining: {
    title: "Zajęcia grupowe",
    description:
      "Trening w małej, kameralnej grupie i energia wspólnego wysiłku. Idealny wybór, jeśli chcesz połączyć atmosferę grupy z indywidualnym wsparciem. Zapisz się na jedne z naszych zajęć i sprawdź, jak działa synergia wspólnego treningu.",
    backgroundImageUrl: "/offer/transform.jpg",
    buttonText: "Zapisz się",
    isLink: true,
    linkUrl: "https://app.fitssey.com/qtylaclub",
    linkTarget: "_blank",
  },
  transform: {
    title: "Transform",
    description:
      "Transform to flagowy, limitowany program QTYLA - 12 tygodni pełnego zaangażowania, które zmieniają sylwetkę, zdrowie i podejście do treningu. Indywidualnie dopasowane plany, analiza postępów, wskazówki żywieniowe, kontrola fizjoterapeuty i stałe wsparcie trenera. To nie tylko program - to inwestycja w trwałą zmianę, którą zobaczysz i poczujesz.",
    backgroundImageUrl: "/offer/personal-training.jpg",
    buttonText: "Zapisz się",
    isLink: true,
    linkUrl: "/transform",
  },
  onlineCooperation: {
    title: "Współpraca online",
    description: `Nie możesz trenować w QTYLA? Nic strasznego. Otrzymaj spersonalizowany plan, wskazówki i wsparcie trenera online - niezależnie od tego, gdzie jesteś. Napisz na ${QTYLA_EMAIL} lub zadzwoń.`,
    backgroundImageUrl: "/offer/semipersonal-training.jpg",
    buttonText: "Skontaktuj się",
    onButtonClick: () => scrollSectionIntoView("footer"),
  },
  events: {
    title: "Eventy",
    backgroundImageUrl: "/offer/events.jpg",
    inProgress: true,
  },
  wellness: {
    title: "Wellness",
    backgroundImageUrl: "/offer/wellness.jpg",
    inProgress: true,
  },
};
