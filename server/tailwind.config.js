/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        display: ["Rajdhani", "Inter"],
      },
      colors: {
        // X33 ENGINE-X: Navy, Cyan, Gold
        zinc: {
          50: "#F3F8FF",
          100: "#EAF4FF",
          200: "#D3E2F5",
          300: "#B4C7E0",
          400: "#8EA3C2",
          500: "#6A7F9F",
          600: "#4A5F80",
          700: "#1F3556",
          800: "#132545",
          900: "#0B1426",
          925: "#0A1120",
          950: "#070D18",
        },
        blue: {
          50: "#E8FEFF",
          100: "#C7FAFD",
          200: "#9AF4F9",
          300: "#6AEBF2",
          400: "#3DE0E8",
          500: "#1CC3CF",
          600: "#0A8DA0",
          700: "#08707F",
          800: "#0A5663",
          900: "#0A3E4A",
          950: "#062A33",
        },
        gold: {
          300: "#FFE08A",
          400: "#F5C83E",
          500: "#E0AE1F",
          600: "#B88A10",
        },
      },
    },
  },
};
