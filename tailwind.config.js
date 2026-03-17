/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          primary: "#ea580c",
          "primary-light": "#f97316",
          "primary-dark": "#c2410c",
          muted: "#78716c",
          cream: "#ffffff",
          "cream-dark": "#fef3c7",
          border: "#fed7aa",
          "border-strong": "#fdba74",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "60%": { opacity: "1", transform: "scale(1.02) translateY(-2px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out forwards",
        "bounce-in": "bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      backgroundImage: {
        "orange-blob": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249, 115, 22, 0.25), transparent)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
