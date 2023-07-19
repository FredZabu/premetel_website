/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/Bg2.png')",
      
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
      'p-text': '#788B9A',
    },
     fontFamily: {
     
      'title': ['Nunito', 'sans-serif'],
      
    },
  },
  
  plugins: [],
}