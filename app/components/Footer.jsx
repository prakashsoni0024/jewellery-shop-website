"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* LOGO + DESCRIPTION */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-yellow-400 mb-3 tracking-wide">
            Indra Jewellers
          </h2>
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
              href="https://wa.me/91 883 961 7340"
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
            HN818, Madhotal Rajeev Gandhi Nagar, Jabalpur (M.P.)
          </p>
          <p className="text-gray-300 text-sm md:text-base">📞  883 961 7340</p>
          <p className="text-gray-300 text-sm md:text-base">
            <a
              href="https://wa.me/91 883 961 7340"
              className="hover:text-yellow-400 transition-colors"
            >
              WhatsApp Chat
            </a>
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            📧 info@indrajewellers.com
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-gray-300 text-sm md:text-base hover:text-yellow-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 text-sm md:text-base hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-300 text-sm md:text-base hover:text-yellow-400 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 text-sm md:text-base hover:text-yellow-400 transition-colors"
            >
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
