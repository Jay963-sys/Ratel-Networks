"use client";

import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-gray-300 py-12">
      {/* 🔹 Background Image with Overlay */}
      <Image
        src="/hay.jpg"
        alt="Footer Background"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left - Copyright + Created by */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Ratel Networks</span>.
            All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Created by{" "}
            <a
              href="https://jay-dev-portfolio.vercel.app/"
              target="_blank"
              className="underline hover:text-[#0a31df] transition-colors duration-300"
            >
              Jay.dev
            </a>
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 text-sm md:text-base">
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-6">
          {[
            { icon: <FaTwitter />, href: "https://twitter.com" },
            { icon: <FaFacebook />, href: "https://facebook.com" },
            { icon: <FaLinkedin />, href: "https://linkedin.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white text-xl shadow-md transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
