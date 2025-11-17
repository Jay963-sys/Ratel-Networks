"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Clock, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative py-32 bg-white text-gray-800 overflow-hidden">
      {/* Light Background */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/jay.jpg" alt="Background" fill className="object-cover" />
      </div>

      <section className="relative py-20 max-w-6xl mx-auto px-6">
        {/* Intro */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
        >
          Ratel Networks Limited
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 text-center max-w-4xl mx-auto mb-12"
        >
          At Ratel Networks Limited, we believe connectivity is the backbone of
          innovation. Our mission is to deliver reliable, secure, and scalable
          IT solutions that empower businesses and individuals to thrive in the
          digital era.
        </motion.p>

        {/* Vision & Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.3 },
            },
          }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              Our Vision 🌍
            </h2>
            <p className="text-gray-700 mb-6">
              To be Africa&apos;s most trusted and innovative IT solutions
              provider, empowering individuals, businesses, and communities
              through seamless connectivity and cutting-edge technology.
            </p>

            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
              Our Mission 🚀
            </h2>
            <p className="text-gray-700">
              Deliver reliable internet, robust cloud solutions, advanced
              cybersecurity, and 24/7 IT support. We build lasting partnerships,
              drive digital transformation, and ensure business continuity with
              integrity and excellence.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-orange-200"
          >
            <Image
              src="/team.jpg"
              alt="Our Team"
              fill
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <section className="py-16 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-orange-500 mb-10"
          >
            Our Values
          </motion.h2>

          <motion.div
            className="grid gap-10 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                Icon: Lightbulb,
                title: "Innovation",
                text: "We embrace creativity and cutting-edge solutions.",
              },
              {
                Icon: ShieldCheck,
                title: "Integrity",
                text: "Honesty and transparency guide all our actions.",
              },
              {
                Icon: Clock,
                title: "Reliability",
                text: "Always on time, always delivering beyond expectations.",
              },
              {
                Icon: Award,
                title: "Excellence",
                text: "Setting the standard in service and professionalism.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center bg-orange-50 p-6 rounded-xl shadow hover:shadow-orange-200 transition-shadow"
              >
                <value.Icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Partner With Us
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Together, we can shape the future of connectivity and empower
            businesses across Africa and beyond.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-2xl hover:bg-orange-500 hover:text-white hover:scale-105 transition-transform duration-300"
          >
            📩 Contact Us
          </Link>
        </motion.section>
      </section>
    </main>
  );
}
