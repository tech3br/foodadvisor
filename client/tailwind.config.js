module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#248232',
          light: '#248232',
          darker: '#040F0F',
          text: '#FCFFFC',
          lightest: '#2D3A3A',
        },
        secondary: {
          DEFAULT: '#2BA84A',
          light: '#2BA84A',
          darker: '#040F0F',
          text: '#FCFFFC',
          lightest: '#2D3A3A',
        },
        muted: {
          DEFAULT: '#FCFFFC',
          light: '#FCFFFC',
          darker: '#2D3A3A',
          text: '#2D3A3A',
        },
      },
    },
  },
  variants: {
    extend: {
      // ...
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
};
