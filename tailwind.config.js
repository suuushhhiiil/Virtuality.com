/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#8B0F1A",
        wine: "#5A0A14",
        charcoal: "#111111",
        cream: "#F6EFE7",
        taupe: "#C7B7A6",
        gold: "#C89D5A",
        test: "#006aff",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "Cambria", "serif"],
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      letterSpacing: {
        brand: "0.22em",
      },
      maxWidth: {
        measure: "40rem",
        page: "72rem",
      },
    },
  },
  plugins: [],
};
