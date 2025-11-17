"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  Cloud,
  Shield,
  Headphones,
  Globe,
  BarChart3,
  Users,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      icon: <Wifi className="w-10 h-10 text-orange-500" />,
      title: "Internet Services",
      description:
        "High-speed, reliable internet solutions for homes and businesses.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-orange-500" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud migration, hosting, and infrastructure management.",
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Cybersecurity",
      description:
        "Protect your business with advanced security and monitoring.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-orange-500" />,
      title: "24/7 IT Support",
      description:
        "Round-the-clock technical assistance and managed IT services.",
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Network Setup",
      description:
        "Robust and secure networking for homes, offices, and enterprises.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
      title: "Data Analytics",
      description:
        "Turn raw data into insights with powerful analytics solutions.",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-orange-500" />,
      title: "Voice Solutions",
      description: "Custom voice solutions to enhance your communication.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "IT Consultancy",
      description:
        "Expert advice and strategies to optimize your IT infrastructure.",
    },
  ];

  return (
    <main className="relative py-32 bg-white text-gray-800">
      {/* Light Background Banner */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/pay.jpg"
          alt="Services Background"
          fill
          className="object-cover"
        />
      </div>

      <section className="relative py-20 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900 mb-6"
        >
          What we <span className="text-orange-500">Offer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg mb-16"
        >
          At{" "}
          <span className="text-orange-500 font-semibold">
            Ratel Networks Limited
          </span>
          , we deliver cutting-edge IT solutions designed to keep you connected,
          secure, and future-ready.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-orange-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-10">
            We don’t just deliver services — we build long-term partnerships.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Proven reliability with 100+ satisfied clients",
              "Innovative solutions tailored to your needs",
              "Dedicated 24/7 expert support",
            ].map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="text-orange-500 w-6 h-6 flex-shrink-0" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
