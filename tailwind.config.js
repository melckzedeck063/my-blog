/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '48': '12rem', // 192px
        '64': '16rem', // 256px
        '68' : '17rem',
        '70': '36rem'
      },
    },
  },
  plugins: [],
}

