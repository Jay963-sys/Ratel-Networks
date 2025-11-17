"use client";

import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-900">
              Ratel Networks Limited
            </span>
            . All rights reserved.
          </p>

          <p className="text-xs mt-2">
            Developed by{" "}
            <a
              href="https://jay-dev-portfolio.vercel.app/"
              target="_blank"
              className="font-medium text-orange-600 hover:text-orange-500 transition"
            >
              Jay.dev
            </a>
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-orange-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-600 transition">
            Terms of Service
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex space-x-5">
          {[
            { icon: <FaTwitter />, href: "https://twitter.com" },
            { icon: <FaFacebook />, href: "https://facebook.com" },
            { icon: <FaLinkedin />, href: "https://linkedin.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white 
              transition shadow-sm"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
