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

  // Detect scroll into view
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
      className="relative py-32 bg-white text-gray-900"
    >
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF914D]">
            Trusted by Businesses Worldwide
          </span>
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
              className="bg-white rounded-xl p-10 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#FF6B00] transition-all"
            >
              <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF914D]">
                {counts[index]}
                {stat.suffix}
              </p>
              <p className="text-gray-700 mt-3 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center mb-12"
        >
          Our Trusted Partners
        </motion.h3>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-10"
        >
          {partners.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(255, 107, 0, 0.25)",
              }}
              className="w-32 h-20 relative bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center transition-all"
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
