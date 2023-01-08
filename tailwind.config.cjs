/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/typography"),
  ],
};
