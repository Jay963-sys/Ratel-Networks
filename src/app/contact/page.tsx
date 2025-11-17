"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative py-32 bg-white text-gray-800 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/hay.jpg" alt="Background" fill className="object-cover" />
      </div>

      <section className="relative z-10 py-20 max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-orange-500 mb-6"
        >
          Get in <span className="text-gray-900">Touch</span>
        </motion.h1>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We&apos;re here to answer your questions and discuss how we can help
          your business thrive. Reach out via email, phone, or visit us at our
          office.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6 text-lg"
        >
          <p className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-orange-500" />
            13, Raji Abayomi, Oshodi, Lagos
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-orange-500" />
            +234 903 399 6360
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-orange-500" />
            support@ratelnetworks.com.ng
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-6 mt-10 text-2xl"
        >
          {[
            { icon: <FaFacebook />, href: "https://facebook.com" },
            { icon: <FaTwitter />, href: "https://twitter.com" },
            { icon: <FaLinkedin />, href: "https://linkedin.com" },
            { icon: <FaInstagram />, href: "https://instagram.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
