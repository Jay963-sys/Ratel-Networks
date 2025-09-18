"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch {
      setStatus("Error sending ❌");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-secondary p-8 rounded-xl shadow-md space-y-4"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md bg-black border border-gray-600 text-white focus:border-primary transition"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md bg-black border border-gray-600 text-white focus:border-primary transition"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={5}
        required
        className="w-full p-3 rounded-md bg-black border border-gray-600 text-white focus:border-primary transition"
      />
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Send Message
      </button>

      {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
    </form>
  );
}
