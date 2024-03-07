/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    
    extend: {
      colors:{
        'primary':'#F5F5F5',
        'secondary':"#333333",
        'accent':'#d4af37'
      },
    },
  },
  plugins: [],
}

