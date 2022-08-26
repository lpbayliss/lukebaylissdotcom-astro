/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: "#16161a",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        primary: "#7f5af0",
        surface: "#242629",
      },
    },
  },
  plugins: [],
};
