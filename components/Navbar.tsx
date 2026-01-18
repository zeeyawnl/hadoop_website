'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`relative bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-xl' : 'shadow-lg shadow-black/5'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-24 h-16  rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
              <Image
  src="/images/newseticon.png"      // put logo in /public/logo.png
  alt="Logo"
  width={60}
  height={60}
  className="object-contain"
/>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechCloud
            </span>
          </Link>

         {/* Desktop Nav */}
<div className="hidden md:flex items-center space-x-8">
  <Link href="#home" className="relative text-gray-700 font-medium hover:text-blue-600 group">
    Home
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
  </Link>

  <Link href="#about" className="relative text-gray-700 font-medium hover:text-blue-600 group">
    About
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
  </Link>

  <Link href="#courses" className="relative text-gray-700 font-medium hover:text-blue-600 group">
    Courses
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
  </Link>
</div>


          {/* CTA + Mobile */}
          <div className="flex items-center space-x-4">
            <Link
  href="#contact"
  className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
>
  Contact Us
</Link>


            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

       {/* Mobile Menu */}
{mobileOpen && (
  <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
    <div className="px-4 py-6 space-y-4">
      <Link
        href="#home"
        onClick={() => setMobileOpen(false)}
        className="block text-gray-700 font-medium py-2 hover:text-blue-600 transition"
      >
        Home
      </Link>

      <Link
        href="#about"
        onClick={() => setMobileOpen(false)}
        className="block text-gray-700 font-medium py-2 hover:text-blue-600 transition"
      >
        About
      </Link>

      <Link
        href="#courses"
        onClick={() => setMobileOpen(false)}
        className="block text-gray-700 font-medium py-2 hover:text-blue-600 transition"
      >
        Courses
      </Link>

      <Link
        href="#contact"
        onClick={() => setMobileOpen(false)}
        className="block text-gray-700 font-medium py-2 hover:text-blue-600 transition"
      >
        Contact
      </Link>
    </div>
  </div>
)}

      </nav>
    </header>
  );
}
