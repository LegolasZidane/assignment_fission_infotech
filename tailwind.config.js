/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Scans all HTML files in the project root
    "./src/**/*.{js,jsx,ts,tsx,html}", // Scans all files in the 'src' folder and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
