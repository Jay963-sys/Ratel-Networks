"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  Cloud,
  Shield,
  Headphones,
  Server,
  Globe,
  Monitor,
  PhoneCall,
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <Wifi className="w-10 h-10 text-[#FF6B00]" />,
      title: "Internet Services",
      description:
        "High-speed, reliable connectivity tailored for businesses and enterprises.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-[#FF6B00]" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud migration, hosting, and infrastructure management.",
    },
    {
      icon: <Shield className="w-10 h-10 text-[#FF6B00]" />,
      title: "Cybersecurity",
      description:
        "Advanced security monitoring and protection against evolving threats.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-[#FF6B00]" />,
      title: "24/7 IT Support",
      description:
        "Dedicated technical assistance and managed IT services around the clock.",
    },
    {
      icon: <Server className="w-10 h-10 text-[#FF6B00]" />,
      title: "Data Center Solutions",
      description:
        "Robust, secure data center infrastructure for mission-critical workloads.",
    },
    {
      icon: <Globe className="w-10 h-10 text-[#FF6B00]" />,
      title: "Network Solutions",
      description:
        "Enterprise-grade networking and WAN solutions to power your operations.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-[#FF6B00]" />,
      title: "IT Consulting",
      description:
        "Expert guidance to align your IT strategy with business goals.",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-[#FF6B00]" />,
      title: "Unified Communications",
      description:
        "Seamless communication platforms integrating voice, video, and messaging.",
    },
  ];

  return (
    <section className="relative py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF914D]">
            Our Services
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-center mt-5 max-w-2xl mx-auto text-lg"
        >
          Ratel Networks Limited delivers next-gen IT and internet solutions
          that help businesses stay connected, secure, and future-ready.
        </motion.p>

        {/* Service Grid */}
        <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Ready to transform your business with Ratel Networks Limited?
          </h3>

          <Link
            href="/contact"
            className="px-8 py-4 bg-[#FF6B00] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#e46200] hover:scale-105 transition-transform duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
