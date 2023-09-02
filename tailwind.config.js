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
      animation: {
        fadeInOverlay: "fadeInOverlay 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        fadeInContent: "fadeInContent 200ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeInOverlay: {
          to: { opacity: 1 },
          from: { opacity: 0 },
        },
        fadeInContent: {
          to: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          from: {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
};
