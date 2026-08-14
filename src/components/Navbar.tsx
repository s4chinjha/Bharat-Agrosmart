"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <span>🌱</span> Bharat Agrosmart
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none hover:text-green-200 transition p-1"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
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

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-green-800 border-t border-green-600 mt-4 px-4 py-2">
          <ul className="flex flex-col space-y-3 py-2">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-green-200 transition">Home</Link></li>
            <li><Link href="/disease-detection" onClick={() => setIsOpen(false)} className="block hover:text-green-200 transition">Disease Detection</Link></li>
            <li><Link href="/market-prices" onClick={() => setIsOpen(false)} className="block hover:text-green-200 transition">Market Prices</Link></li>
            <li><Link href="/smart-advisory" onClick={() => setIsOpen(false)} className="block hover:text-green-200 transition">Advisory</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-green-200 transition">About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-green-200 transition">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

