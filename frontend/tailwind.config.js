/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "neon-glow": "neon-glow 1.5s ease-in-out infinite",
      },
      keyframes: {
        "neon-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.7)" },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};

