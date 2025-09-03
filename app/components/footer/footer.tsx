export default function Footer() {
  return (
    <footer className="bg-concrete flex flex-col items-center justify-between px-6 py-8 text-white md:flex-row">
      {/* Map Placeholder */}
      <div className="mb-6 flex h-48 w-full items-center justify-center rounded bg-gray-800 md:mr-8 md:mb-0 md:w-1/2">
        <span className="text-gray-400">[Map Placeholder]</span>
      </div>
      {/* Contact Info */}
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
