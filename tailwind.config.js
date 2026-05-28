/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#070716",
        navy: "#090825",
        ink: "#151033",
        easyYellow: "#8b5cf6",
        muted: "#a9a4c7",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 70px rgba(139, 92, 246, 0.28)",
        panel: "0 28px 90px rgba(13, 8, 35, 0.5)",
      },
    },
  },
  plugins: [],
};
