// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scrollbarWidth: {
        none: 'none',
      },
      keyframes: {
        animate: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(20px)',
          },
        },
      },
      animation: {
        'bounce-alternate': 'animate 2s infinite ease-in-out',
      },
      typography: (theme) => ({
        whiteStroke: {
          WebkitTextStroke: '1px white',
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'), // Enable the typography plugin
  ],
};
