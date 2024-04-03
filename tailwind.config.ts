/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto, open-sans"],
      },
      colors: {
        "blueColour": "#00a3d4",
        "goldenYellow": "#ffdf00",
        "lightGray":"#fafafa",
        "textColor":"#000000"
      },
    },
  },
  plugins: [],
};