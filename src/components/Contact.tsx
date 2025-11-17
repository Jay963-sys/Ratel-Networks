"use client";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get in <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
          Have questions or need support? Reach out through any of the following
          channels and we’ll be happy to assist you.
        </p>

        {/* Contact Info Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          {[
            {
              icon: (
                <FaPhone className="text-orange-500 text-3xl mb-3 mx-auto" />
              ),
              text: "+234 903 399 6360",
            },
            {
              icon: (
                <FaEnvelope className="text-orange-500 text-3xl mb-3 mx-auto" />
              ),
              text: "support@ratelnetworks.com.ng",
            },
            {
              icon: (
                <FaMapMarkerAlt className="text-orange-500 text-3xl mb-3 mx-auto" />
              ),
              text: "13, Raji Abayomi, Oshodi, Lagos",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center min-w-[280px] md:min-w-[320px] bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg hover:border-orange-400 transition"
            >
              {item.icon}
              <p className="text-lg font-semibold text-gray-700 text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Social Media */}
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
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-500 text-gray-700 hover:text-white text-2xl shadow transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
