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
      fontFamily:
      {
        title:["Poppins","sans-serif"],
        Mono:["Bitcount Single Ink","sans-serif"],
        Aud:["Audiowide","sans-serif"]
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}