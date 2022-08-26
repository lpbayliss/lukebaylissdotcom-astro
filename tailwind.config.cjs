/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: "#fffffe",
          DEFAULT: "#fffffe",
          dark: "#16161a",
        },
        headline: {
          light: "#2b2c34",
          DEFAULT: "#2b2c34",
          dark: "#fffffe",
        },
        paragraph: {
          light: "#2b2c34",
          DEFAULT: "#2b2c34",
          dark: "#94a1b2",
        },
        primary: {
          light: "#2b2c34",
          DEFAULT: "#2b2c34",
          dark: "#94a1b2",
        },
        surface: {
          light: "#d1d1e9",
          DEFAULT: "#d1d1e9",
          dark: "#72757e",
        },
      },
    },
  },
  plugins: [],
};
