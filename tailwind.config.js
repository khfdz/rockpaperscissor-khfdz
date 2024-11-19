/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Menambahkan custom breakpoint xs
      },
      colors: {
        'color1': '#15193c',
        'color2': '#5b596e',
        'color3': '#2947b9',
        'color4': '#16223c',
        'color5': '#3c4262',
        'yellow1': '#f1a420',
        'yellow2': '#c96912',
        'gray1': '#b2c2e4',
        'blue1': '#4966f2',
        'blue2': '#2a46c3',
        'red1': '#dc425a',
        'red2': '#9e1531',
        'purple1': '#8d57e3',
        'purple2': '#5f37aa',
        'cyan1': '#3fb7cf',
        'cyan2': '#2d8eae',
    },
    borderWidth: {
      'light': '8px',
      'medium': '12px',
      'bold': '15px',
    },
    },
  },
  plugins: [],
};
