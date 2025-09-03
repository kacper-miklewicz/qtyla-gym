export default function Footer() {
  return (
    <footer className="bg-concrete flex flex-col items-center justify-between px-6 py-8 text-white md:flex-row">
      <div className="md:w-1/2">
        <iframe
          className="h-[450px] w-full"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn_f9RgCxAkcRY67QXaQJRUU&key=${process.env.GOOGLE_MAPS_API_KEY}`}
        />
      </div>
      <div className="flex w-full flex-col items-start md:w-1/2">
        <h2 className="mb-2 text-lg font-semibold">Contact Us</h2>
        <p className="mb-1">Qtyla Training Club</p>
        <p className="mb-1">123 Gym Street</p>
        <p className="mb-1">City, Country</p>
        <p className="mb-1">Phone: (123) 456-7890</p>
        <p>Email: info@qtyla.com</p>
      </div>
    </footer>
  );
}
