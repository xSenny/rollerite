/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        madini: "Madimi One, sans-serif",
      },
      colors: {
        accent: "#F03328",
        "foreground-bg": "#EC9393",
        secondary: "#5B5454",
      },
    },
  },
  plugins: [],
};
