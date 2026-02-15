"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 mt-20 relative">

      {/* TOP CENTER LOGO */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black p-2 rounded-full shadow-lg">
        <Image
          src="/short ij.png"
          alt="Indra Jewellers Logo"
          width={80}
          height={80}
          className="object-contain drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 pt-10">
        
        {/* LOGO + DESCRIPTION */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            {/* LOGO WITH HEADING */}
            <Image
              src="/short ij.png"
              alt="Indra Jewellers Logo"
              width={35}
              height={35}
              className="object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
            />
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-yellow-400 tracking-wide">
              Indra Jewellers
            </h2>
          </div>

          <p className="text-gray-300 text-sm md:text-base">
            Trusted Jewellery Store Since 19XX. Timeless designs for every
            occasion.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/indra_jewellers_jabalpur"
              className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/918839617340"
              className="text-gray-300 hover:text-yellow-400 transition-colors text-lg"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Contact</h3>
          <p className="text-gray-300 text-sm md:text-base">
             Chungi Naka Chowk, H No 196, Akash Vihar Road, Jabalpur, Madhya Pradesh 482002
          </p>
          <p className="text-gray-300 text-sm md:text-base">📞 +91 8839617340</p>
          <p className="text-gray-300 text-sm md:text-base">
            <a
              href="https://wa.me/918839617340"
              className="hover:text-yellow-400 transition-colors"
            >
              WhatsApp Chat
            </a>
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            📧 krishna.soni88396@gmail.com
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-gray-300 hover:text-yellow-400">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-yellow-400">
              About
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-yellow-400">
              Products
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-400 text-sm md:text-base mt-10 border-t border-yellow-400/30 pt-6">
        &copy; {new Date().getFullYear()} Indra Jewellers. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
