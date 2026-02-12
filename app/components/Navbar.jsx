"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    "Home",
    "Products",
    "Gallery",
    "Valuation",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-md shadow-md px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300">
      
      {/* LOGO IMAGE */}
      <Link href="/" className="flex items-center">
        <Image
          src="/short ij.png"   // <-- apna png logo
          alt="Indra Jewellers Logo"
          width={40}        // size adjust kar sakta hai
          height={40}
          className="object-contain transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
          priority
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <Link
            key={link}
            href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className="relative text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 group"
          >
            {link}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden animate-fadeIn">
          {links.map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-lg font-medium text-white hover:text-yellow-400 transition-all group"
              onClick={() => setIsOpen(false)}
            >
              {link}
              <span className="block h-0.5 w-0 bg-yellow-400 mt-1 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
