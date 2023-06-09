
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-primary': '#A731C2',
        'c-d-primary': '#8b07a6',
        'c-l-primary': '#e7b9ff',
        'c-secondary': '#ffccbc',
        'c-d-secondary': '#cb9b8c',
        'c-l-secondary': '#ffffee',
        'c-bg-light': '#272f40',
        'c-bg': '#121a2a',
        'c-text': '#FDFDFD',
        white: '#FDFDFD',
        black: "#121029",
        transparent: 'transparent'
      },
      
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
}
