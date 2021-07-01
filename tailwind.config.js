module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem"
      },
      margin: {
        '26': '6.7rem',
        '-26': '-6.7rem'
      },
      maxHeight: {
        '100': '30rem'
      },
      fontFamily: {
        'big-shoulder-display': ['"Big Shoulders Display"', 'cursive']
      },
      
      rotate: {
        '270': '270deg'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
