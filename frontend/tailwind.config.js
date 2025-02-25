/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E2E2E',
        'secondary': '#F5F5F5',
        'accent': '#FFD700',
        'text': '#000000',
        'background': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}