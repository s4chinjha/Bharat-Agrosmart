import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-green-700 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <span>🌱</span> Bharat Agrosmart
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-green-200 transition">Home</Link></li>
            <li><Link href="/disease-detection" className="hover:text-green-200 transition">Disease Detection</Link></li>
            <li><Link href="/market-prices" className="hover:text-green-200 transition">Market Prices</Link></li>
            <li><Link href="/smart-advisory" className="hover:text-green-200 transition">Advisory</Link></li>
            <li><Link href="/about" className="hover:text-green-200 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-green-200 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
