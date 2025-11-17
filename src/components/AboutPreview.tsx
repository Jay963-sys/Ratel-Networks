"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative py-32 bg-white text-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF914D]">
              Ratel Networks
            </span>
          </h2>

          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            At Ratel Networks Limited, we believe connectivity is the backbone
            of modern innovation. Our mission is to deliver reliable, secure,
            and scalable IT solutions that empower businesses and individuals to
            thrive in the digital era.
          </p>

          <p className="text-gray-600 mb-10 text-base leading-relaxed">
            With a focus on internet services, cloud solutions, cybersecurity,
            and IT support, we are committed to keeping you connected and
            protected — anytime, anywhere.
          </p>

          <Link
            href="/about"
            className="px-8 py-4 bg-[#FF6B00] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#e46200] hover:scale-105 transition-transform duration-300"
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
          className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-orange-200"
        >
          <Image
            src="/company.jpg"
            alt="About Ratel Networks"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
