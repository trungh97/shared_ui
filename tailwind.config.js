/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        button: '0px 1px 2px rgba(10, 12.67, 18, 0.05)',
      },
    },
  },
  plugins: [],
};
