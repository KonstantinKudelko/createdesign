/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["GothamPro"],
        neutral: ["NeutralFace"],
      },
      colors: {
        black: "#151515",
        gray: "#A8A8A8",
      },
    },
  },
  plugins: [],
};
