"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { number: 300, label: "Trusted Clients", suffix: "+" },
    { number: 15, label: "Years of Experience", suffix: "+" },
    { number: 150, label: "IT Projects Delivered", suffix: "+" },
    { number: 70, label: "Partners Worldwide", suffix: "+" },
  ];

  const partners = [
    "/aws.png",
    "/microsoft.png",
    "/cisco.png",
    "/google.png",
    "/avaya.png",
    "/mikrotik.png",
    "/Huawei.png",
    "/dell.png",
    "/ubiquiti.png",
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [inView, setInView] = useState(false);

  // Count-up animation
  useEffect(() => {
    if (!inView) return;
    const intervals = stats.map((stat, i) => {
      let current = 0;
      const increment = Math.ceil(stat.number / 60);
      return setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(intervals[i]);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, 30);
    });
    return () => intervals.forEach((int) => clearInterval(int));
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setInView(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="stats-section"
      className="relative min-h-[100vh] py-40 bg-black text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pip.jpg"
          alt="Background"
          fill
          sizes="100vw"
          priority
          quality={85}
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-black/70" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-20 drop-shadow-lg"
        >
          Trusted by Businesses Worldwide
        </motion.h2>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-24 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20 hover:border-primary/50 transition"
            >
              <p className="text-5xl font-extrabold text-primary drop-shadow-md">
                {counts[index]}
                {stat.suffix}
              </p>
              <p className="text-gray-100 mt-3 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center text-white mb-12 drop-shadow-lg"
        >
          Our Trusted Partners
        </motion.h3>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-10"
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, borderColor: "#3b82f6" }}
              className="w-32 h-20 relative bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-md border border-white/20 flex items-center justify-center transition"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
