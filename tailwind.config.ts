import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#E8654A",
        cream: "#FAF6F0",
        charcoal: "#1A1A1A",
        olive: "#7A8C5E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Fraunces", "serif"],
      },
    },
  },
} satisfies Config;
