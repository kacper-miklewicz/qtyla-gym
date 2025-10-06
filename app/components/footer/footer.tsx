import Image from "next/image";

import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaHouse } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import { QTYLA_EMAIL, QTYLA_PHONE, QTYLA_PHONE_DISPLAY } from "../constants";

import Socials from "@/app/components/navbar/socials";
import { ContactItem } from "./contact-item";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-deep-black py-12">
      <div className="flex w-full flex-col gap-10 p-0 shadow-2xl backdrop-blur-md md:flex-row md:gap-0">
        <div className="flex w-full flex-col justify-between rounded-none px-6 text-white shadow-none md:w-1/2 md:pr-12 lg:px-10">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/logo-minimalistic-white.png"
                alt="QTYLA Club Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <h3 className="text-primary-400 text-2xl font-bold tracking-widest uppercase xl:text-3xl">
                Kontakt
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <a
                className="hover:text-primary-400 transition-colors"
                href={`tel:${QTYLA_PHONE}`}
              >
                <ContactItem icon={BsTelephoneFill}>
                  {QTYLA_PHONE_DISPLAY}
                </ContactItem>
              </a>
              <a
                className="hover:text-primary-400 transition-colors"
                href={`mailto:${QTYLA_EMAIL}`}
              >
                <ContactItem icon={FaEnvelope}>{QTYLA_EMAIL}</ContactItem>
              </a>
              <ContactItem icon={FaHouse}>
                <address className="not-italic">
                  <p>82-500 Kwidzyn</p>
                  <p>ul. Ogrodowa 14</p>
                </address>
              </ContactItem>
            </div>
          </div>
          <div className="md:flex-start mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:justify-between lg:flex-row">
            <div>
              <h4 className="text-primary-400 mb-2 text-base font-semibold xl:mb-6 xl:text-2xl">
                Godziny otwarcia
              </h4>
              <p className="mb-1 xl:text-xl">
                <span className="font-semibold whitespace-nowrap">
                  Poniedziałek - sobota:
                </span>
                &nbsp; 8:00 - 22:00
              </p>
              <p className="xl:text-xl">
                <span className="font-semibold whitespace-nowrap">
                  Niedziela:
                </span>
                &nbsp; nieczynne
              </p>
            </div>
            <div className="mt-6 flex justify-center lg:mt-0 lg:ml-8">
              <Socials variant="universal" />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center rounded-none p-0 shadow-none md:w-1/2">
          <iframe
            className="h-120 w-full rounded-none border-0"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_f9RgCxAkcRY67QXaQJRUU&key=${process.env.GOOGLE_MAPS_API_KEY}`}
            title="QTYLA Club Location"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 py-8 text-xl text-white md:flex-row md:justify-center md:gap-10 md:py-20">
        <Link href="/regulamin" className="hover:underline">
          Regulamin
        </Link>
        <GoDotFill className="hidden size-3 md:block" />
        <Link href="/polityka-prywatnosci" className="hover:underline">
          Polityka prywatności
        </Link>
      </div>
      <div className="pb-2 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} QTYLA Training Club. Wszelkie prawa
        zastrzeżone.
      </div>
    </footer>
  );
}
