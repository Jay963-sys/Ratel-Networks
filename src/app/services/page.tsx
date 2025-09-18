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
      icon: <Wifi className="w-10 h-10" />,
      title: "Internet Services",
      description:
        "High-speed, reliable internet solutions for homes and businesses.",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud migration, hosting, and infrastructure management.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Cybersecurity",
      description:
        "Protect your business with advanced security and monitoring.",
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "24/7 IT Support",
      description:
        "Round-the-clock technical assistance and managed IT services.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Network Setup",
      description:
        "Robust and secure networking for homes, offices, and enterprises.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Data Analytics",
      description:
        "Turn raw data into insights with powerful analytics solutions.",
    },
    {
      icon: <PhoneCall className="w-10 h-10" />,
      title: "Voice Solutions",
      description: "Custom voice solutions to enhance your communication.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "IT Consultancy",
      description:
        "Expert advice and strategies to optimize your IT infrastructure.",
    },
  ];

  return (
    <main className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/pay.jpg"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80" />
      </div>

      <section className="relative py-28 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-5xl font-extrabold mb-6"
        >
          What we <span className="text-primary">Offer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-3xl mx-auto text-lg mb-16"
        >
          At <span className="text-primary font-semibold"> Ratel Networks</span>
          , we deliver cutting-edge IT solutions that keep you connected,
          secure, and future-ready. From cloud migration to network management,
          our services are built to empower your business growth.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-black/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 mb-10">
            We don&apos;t just provide services — we build long-lasting
            partnerships. Our commitment is to ensure your technology works for
            you, not against you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Proven reliability with 100+ satisfied clients",
              "Innovative solutions tailored to your needs",
              "Dedicated 24/7 expert support",
            ].map((point, i) => (
              <div key={i} className="flex items-start space-x-3">
                <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                <p className="text-gray-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
