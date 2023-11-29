/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        light: "#ffffff",
        sand: "#f4f5ef",
        ultraDark: "#000000",
        dark: "#150c0f",
        mediumDark: "#201317",
        red: "#ff2803",
        blue: "#1795f0",
        green: "#30e462",
        yellow: "#f5d010",
      },
      height: {
        nav: "60px",
      },
    },
  },
  plugins: [],
};
