/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        newcolor: {
          DEFAULT: "#1c64f2",
          50: "#e3e8ff",
          100: "#c7d1ff",
          200: "#8f9cff",
          300: "#5768ff",
          400: "#2e4dff",
          500: "#1c64f2",
          600: "#1951c1",
          700: "#143e90",
          800: "#0f2b60",
          900: "#0a1830",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F7D05E", 
          secondary: "#cfaa3a"
        },
      },
    ],
  },
};
