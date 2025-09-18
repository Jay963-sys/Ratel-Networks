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
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg border-b border-gray-800">
      {/* 🔹 Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hay.jpg"
          alt="Navbar Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* 🔹 Navbar Content */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/logo.svg"
            alt="Ratel Networks Logo"
            width={80}
            height={80}
            className="rounded-full group-hover:scale-105 transition-transform"
            priority
          />
          <span className="text-white font-bold text-lg hidden sm:block group-hover:text-blue-500 transition">
            Ratel Networks
          </span>
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition-colors ${
                pathname === href
                  ? "text-blue-500"
                  : "text-gray-200 hover:text-blue-500"
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
              )}
            </Link>
          ))}

          {/* 🔹 Call to Action */}
          <Link
            href="/contact"
            className="ml-6 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md transition"
          >
            Contact Us
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 border-t border-gray-800 px-6 py-4 space-y-4 text-white font-medium"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block transition-colors ${
                  pathname === href
                    ? "text-blue-500"
                    : "text-gray-200 hover:text-blue-500"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
