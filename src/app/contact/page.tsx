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
    <main className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hay.jpg"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20" />
      </div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <section className="relative z-10 py-20 max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-6"
        >
          Get in <span className="text-white">Touch</span>
        </motion.h1>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We&apos;re here to answer your questions and discuss how we can help
          your business thrive. Reach out via email, phone, or visit us at our
          office.
        </motion.p>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6 text-lg"
        >
          <p className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-primary" />
            13, Raji Abayomi, Oshodi, Lagos
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-primary" />
            +234 903 399 6360
          </p>
          <p className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-primary" />
            support@ratelnetworks.com.ng
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-6 mt-10 text-2xl"
        >
          <a
            href="https://facebook.com"
            className="hover:text-primary transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-primary transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-primary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-primary transition"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
