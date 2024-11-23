/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0511F2',    // Deep royal blue
        secondary: '#3279A6',  // Ocean blue
        accent: '#3285A6',     // Bright teal blue
        'site-bg': '#F2F2F2', // Light gray background
      },
    },
  },
  plugins: [],
};
