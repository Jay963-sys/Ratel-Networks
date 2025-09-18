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
      icon: <Wifi className="w-10 h-10 text-primary" />,
      title: "Internet Services",
      description:
        "High-speed, reliable connectivity tailored for businesses and enterprises.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud migration, hosting, and infrastructure management.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Cybersecurity",
      description:
        "Advanced security monitoring and protection against evolving threats.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-primary" />,
      title: "24/7 IT Support",
      description:
        "Dedicated technical assistance and managed IT services around the clock.",
    },
    {
      icon: <Server className="w-10 h-10 text-primary" />,
      title: "Data Center Solutions",
      description:
        "Robust, secure data center infrastructure for mission-critical workloads.",
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Network Solutions",
      description:
        "Enterprise-grade networking and WAN solutions to power your operations.",
    },
    {
      icon: <Monitor className="w-10 h-10 text-primary" />,
      title: "IT Consulting",
      description:
        "Expert guidance to align your IT strategy with business goals.",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-primary" />,
      title: "Unified Communications",
      description:
        "Seamless communication platforms integrating voice, video, and messaging.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/joy.jpg"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-white"
        >
          Our <span className="text-primary">Services</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-center mt-5 max-w-2xl mx-auto text-lg"
        >
          Ratel Networks delivers next-gen IT and internet solutions that help
          businesses stay connected, secure, and future-ready.
        </motion.p>

        {/* Service Grid */}
        <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
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
          <h3 className="text-2xl font-semibold text-white mb-8">
            Ready to transform your business with Ratel Networks?
          </h3>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#0D6EFD] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#0B5ED7] hover:scale-105 transition-transform duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
