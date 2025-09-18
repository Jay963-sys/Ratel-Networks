"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-black text-white"
    >
      {/* 🔹 Background Image */}
      <Image
        src="/lip.jpg"
        alt="Contact Background"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray-200 mb-16 text-lg max-w-2xl mx-auto drop-shadow-md">
          Have questions or need support? Reach out to us through any of the
          following channels and we&apos;ll be glad to help.
        </p>

        {/* 🔹 Contact Info Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          {[
            {
              icon: <FaPhone className="text-primary text-3xl mb-4 mx-auto" />,
              text: "+234 903 399 6360",
            },
            {
              icon: (
                <FaEnvelope className="text-primary text-3xl mb-4 mx-auto" />
              ),
              text: "support@ratelnetworks.com.ng",
            },
            {
              icon: (
                <FaMapMarkerAlt className="text-primary text-3xl mb-4 mx-auto" />
              ),
              text: "13, Raji Abayomi, Oshodi, Lagos",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center min-w-[280px] md:min-w-[320px] bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20 hover:border-primary/50 hover:-translate-y-1 transition"
            >
              {item.icon}
              <p className="text-lg font-semibold text-gray-100 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 Social Media */}
        <div className="flex justify-center gap-6 mt-10">
          {[
            { icon: <FaTwitter />, href: "https://twitter.com" },
            { icon: <FaFacebook />, href: "https://facebook.com" },
            { icon: <FaLinkedin />, href: "https://linkedin.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white hover:text-white text-2xl shadow-md hover:-translate-y-1 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
