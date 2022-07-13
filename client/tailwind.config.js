module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4420D5',
          light: '#4420D5',
          darker: '#0D0628',
          text: '#FFFFFF',
          lightest: '#f0beaf',
        },
        secondary: {
          DEFAULT: '#C247B4',
          light: '#C247B4',
          darker: '#0D0628',
          text: '#FFFFFF',
          lightest: '#ecf7f5',
        },
        muted: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
          darker: '#D1D5DB',
          text: '#555b66',
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
