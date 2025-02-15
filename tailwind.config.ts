import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondery: "#1E293B",
        accent: "#7477FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
