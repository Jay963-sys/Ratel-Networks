"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const subtitleWords = [
    "Reliable",
    "Internet,",
    "IT",
    "solutions,",
    "and",
    "Next-Gen",
    "support",
    "for",
    "Businesses",
    "&",
    "Individuals.",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/pop.png"
        alt="Hero background"
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Soft white gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white" />

      {/* Content */}
      <div className="relative z-10 container px-6 text-center">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative inline-block font-heading text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
        >
          {/* Glow behind */}
          <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF914D] opacity-25 animate-pulse"></span>

          {/* Title */}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF914D]">
            Ratel Networks Limited
          </span>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-0 right-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#FF6B00] to-[#FF914D] origin-left rounded-full"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-lg md:text-3xl text-gray-700 max-w-3xl mx-auto leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1 font-medium"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {subtitleWords.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          {/* Primary Button */}
          <Link
            href="/services"
            className="px-8 py-4 bg-[#FF6B00] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#e46200] hover:scale-105 transition-transform duration-300"
          >
            🚀 Explore Services
          </Link>

          {/* Secondary Button */}
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-[#FF6B00] text-[#FF6B00] font-semibold rounded-2xl hover:bg-[#FF6B00] hover:text-white hover:scale-105 transition-transform duration-300"
          >
            📩 Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
