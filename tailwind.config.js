/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary: "#1A1A1A",
        accent: "#FF6B00",
        light: "#f8fafc",
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.1)",
        glow: "0 0 20px rgba(13,110,253,0.4)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1240px",
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
