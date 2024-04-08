/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'nav': '#202830',
      'base': '#1b2026',
      'nav-text': '#99aabb',
      'white': '#fff',
      'divide': '#64748b',
      'dropdown-bg': '#8b99a9',
      'black': '#000000',
      'list-unselected': '#00e054',
      'list-border': '#DDEEFF40',
      'thinner-divide': '#2C3440',
      'toggle': '#697787',
      'toggle-button': '#f08633',
      'neutral-600': '#525252',
      'primary': '#5c6ac4',
      'transparent': 'transparent',
      'neutral-100': '#f5f5f5',
      'neutral-400': '#a3a3a3',
    },
  },
  plugins: [],
}