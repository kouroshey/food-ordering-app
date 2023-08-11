/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffa300',
        'mainrey': '#242327'
      }
    },
    screens: {
      'sm': '576px', // custom breakpoint for small screens
      'md': '768px', // custom breakpoint for medium screens
      'lg': '992px', // custom breakpoint for large screens
      'xl': '1280px', // default breakpoint for extra-large screens 
    }

  },
  plugins: [],
}

