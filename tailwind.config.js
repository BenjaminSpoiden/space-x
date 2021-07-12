module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem"
      },
      backgroundColor: {
        "light-purple" : "#a849ab",
        "light-green": "#77ff00",
        "lighter-purple": "#904fff",
        "orange": "#ff7300",
        "cyan": "#03fcfc"
      },
      letterSpacing: {
        "widest": ".25em"
      },
      margin: {
        '26': '6.7rem',
        '-26': '-6.7rem'
      },
      maxHeight: {
        '100': '30rem'
      },
      fontFamily: {
        'big-shoulder-display': ['"Big Shoulders Display"', 'cursive'],
        'news-cycle': ['"News Cycle"', 'sans-serif']
      },
      
      rotate: {
        '270': '270deg'
      },
      boxShadow: {
        "inner-magenta": "inset 60px 0 120px #f0f",
        "outer-mangeta": "0 0 100px 6px #f0f",
        "inner-orange": "inset 60px 0 120px #F4D99F",
        "outer-orange": "0 0 100px 6px #F4D99F",
        "outer-white": "0 0 100px 10px #fff",
        "outer-yellow": "0 0 100px 6px #ffd500",
        "inner-yellow": "inset 60px 0 120px #ffd500",
        "outer-green": "0 0 100px 6px #77ff00",
        "inner-green": "inset 60px 0 120px #77ff00",
        "outer-cyan": "0 0 100px 6px #03fcfc",
        "inner-cyan": "inset 60px 0 120px #03fcfc",
        "outer-purple": "0 0 100px 6px #904fff",
        "inner-purple": "inset 60px 0 60px #904fff",
        "inner-orange": "inset 60px 0 120px #ff7300",
        "outer-orange": "0 0 100px 6px #ff7300",
        "inner-pink": "inset 60px 0 120px #ff459f",
        "outer-pink": "0 0 100px 6px #ff459f"
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
