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
    <section className="relative min-h-screen flex items-center justify-center bg-[#1A1A1A] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/pop.png"
        alt="Hero background"
        fill
        className="object-cover"
        style={{ filter: "brightness(1.2)" }}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container px-6 text-center">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative inline-block font-heading text-4xl md:text-7xl font-extrabold text-white leading-tight tracking-tight"
        >
          {/* Glow behind */}
          <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-[#0D6EFD] to-[#00C6FF] opacity-30 animate-pulse"></span>

          {/* Title */}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#e1e8f1] to-[#a8b2c9] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Ratel Networks
          </span>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-0 right-0 -bottom-2 h-[3px] bg-gradient-to-r from-[#0D6EFD] to-[#00C6FF] origin-left rounded-full"
          />
        </motion.h1>

        {/* Subtitle - word by word */}
        <motion.p
          className="mt-6 text-lg md:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-1"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
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
              className="text-white font-semibold"
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
          <Link
            href="/services"
            className="px-8 py-4 bg-[#0D6EFD] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#0B5ED7] hover:scale-105 transition-transform duration-300"
          >
            🚀 Explore Services
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-[#0D6EFD] text-[#0D6EFD] font-semibold rounded-2xl hover:bg-[#0D6EFD] hover:text-white hover:scale-105 transition-transform duration-300"
          >
            📩 Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
