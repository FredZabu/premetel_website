/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/Bg2.jpg')",
        'contact': "url('/src/assets/contactImage.jpg')",
        'aboutImage': "url('/src/assets/bg-1.jpg')",
      }
    },
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-gray-1': '#FAFAFA',
      'text-color': '#333',
      'second-text-color': '#7C7C7C',      
      'faded-color': '#E5F9F7',
      'btn-color': '#C92B27',
       'white': '#FFFFFF',
       'main-color': '#207ef7',
       'third-dark': '#06152B',
       'p-text-alt': '#788B9A',
       'hover-color': 'rgb(236,100,76)',
       'header-color': 'rgb(55, 97, 152)',
       'line-color': '#e6f3fc',
       'text-color2': '#3763a9',
      'p-text': '#4a245a'
    },
     fontFamily: {
     
       'title': ['Noto Serif Georgian', 'serif'],
       'para': ['Quicksand', 'sans-serif'],
      
    },
  },
  
  plugins: [],
}