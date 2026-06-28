export default {
  //
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Inter", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
