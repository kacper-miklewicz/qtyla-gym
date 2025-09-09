export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-concrete flex flex-col items-center justify-between gap-10 px-6 py-8 text-white md:flex-row"
    >
      <div className="w-4/5 overflow-hidden rounded-md md:w-1/2">
        <iframe
          className="h-[350px] w-full"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_f9RgCxAkcRY67QXaQJRUU&key=${process.env.GOOGLE_MAPS_API_KEY}`}
        />
      </div>
      <div className="h-full w-4/5 md:w-1/2">
        <div className="mb-5">
          <h2 className="mb-2 text-lg font-bold uppercase">
            qtyla training club
          </h2>
          <p className="mb-1">ul. Ogrodowa 14, Kwidzyn</p>
          <p className="mb-1">
            Nr telefonu: <a href="tel:+48123456789">(+48) 123 456 789</a>
          </p>
          <p>Email: info@qtyla.com</p>
        </div>

        <h2 className="mb-2 text-lg font-bold uppercase">Godziny otwarcia</h2>
        <p className="mb-1">
          <span className="font-semibold">Poniedziałek - piątek:</span> 6:00 -
          21:00
        </p>
        <p className="mb-1">
          <span className="font-semibold">Sobota, niedziela:</span> 9:00 - 15:00
        </p>
      </div>
    </footer>
  );
}
