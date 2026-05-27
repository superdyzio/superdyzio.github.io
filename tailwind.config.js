/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,astro,md}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,astro,md}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{astro,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
