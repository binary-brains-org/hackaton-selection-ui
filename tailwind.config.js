/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      text: {
        "color-egg": "#F6F1E9",
        "color-yellow": "#FFD93D",
        "color-orange": "#FF8400",
        "color-maron": "#4F200D",
        "color-grey": "#65656567",
      },
    },
    purge: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  },
  plugins: [],
};
