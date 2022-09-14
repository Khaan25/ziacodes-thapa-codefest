/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      maxXl: { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }

      max968: { 'max': '968px' },
      // => @media (max-width: 968px) { ... }

      maxMd: { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      maxSm: { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      max468: { 'max': '468px' },
      // => @media (max-width: 468px) { ... }

      max320: { 'max': '320px' },
      // => @media (max-width: 468px) { ... }

      min320: '320px',
      // => @media (min-width: 320px) { ... }

      min469: '469px',
      // => @media (min-width: 469px) { ... }

      min568: '568px',
      // => @media (min-width: 568px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}