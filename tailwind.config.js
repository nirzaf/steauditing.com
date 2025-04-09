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
        // Add gray color palette for compatibility with v4
        gray: {
          50: 'rgb(249 250 251)',
          100: 'rgb(243 244 246)',
          200: 'rgb(229 231 235)',
          300: 'rgb(209 213 219)',
          400: 'rgb(156 163 175)',
          500: 'rgb(107 114 128)',
          600: 'rgb(75 85 99)',
          700: 'rgb(55 65 81)',
          800: 'rgb(31 41 55)',
          900: 'rgb(17 24 39)',
          950: 'rgb(3 7 18)'
        }
      },
    },
  },
  plugins: [],
};
