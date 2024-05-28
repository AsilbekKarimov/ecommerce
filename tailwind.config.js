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
          secondary: "#cfaa3a",
          accent: "#33394F",
        
          // additional custom colors
        },
      },
      "dark",
      "cupcake",
    ],
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
