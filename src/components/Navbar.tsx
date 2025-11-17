"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo1.svg"
            alt="Ratel Networks Logo"
            width={60}
            height={60}
            className="rounded-full transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-gray-900 font-bold text-lg hidden sm:block group-hover:text-orange-500 transition">
            Ratel Networks Limited
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative ${
                  active
                    ? "text-orange-600"
                    : "text-gray-600 hover:text-orange-600"
                } transition`}
              >
                {label}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-600 rounded-full"></span>
                )}
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 font-medium shadow-sm"
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`block ${
                    active
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  } transition`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center w-full px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow transition"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
