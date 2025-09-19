"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative py-48 bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sip.jpg"
          alt="Background"
          fill
          sizes="100vw"
          priority
          quality={85}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Accent Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-5" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-2xl z-5" />

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-18 items-center relative z-20">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight">
            About <span className="text-primary"></span>
          </h2>
          <p className="text-gray-100 mb-8 text-lg leading-relaxed">
            At Ratel Networks Limited, we believe connectivity is the backbone
            of modern innovation. Our mission is to deliver reliable, secure,
            and scalable IT solutions that empower businesses and individuals to
            thrive in the digital era.
          </p>
          <p className="text-gray-200 mb-10 text-base leading-relaxed">
            With a focus on internet services, cloud solutions, cybersecurity,
            and IT support, we are committed to keeping you connected and
            protected — anytime, anywhere.
          </p>

          <Link
            href="/about"
            className="px-8 py-4 bg-[#0D6EFD] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#0B5ED7] hover:scale-105 transition-transform duration-300"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Right: Company Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/30"
        >
          <Image
            src="/company.jpg"
            alt="About Ratel Networks"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </motion.div>
      </div>
    </section>
  );
}
