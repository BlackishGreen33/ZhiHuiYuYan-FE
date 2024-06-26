import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--jakartaSans-font)'],
        sora: ['var(--soraSans-font)'],
        code: ['var(--firaCode-font)'],
        zheng: ['var(--maShanZheng-font)'],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      textColor: {
        wechatGreen: '#20C300',
        brown: '#B79D9D',
        orange: '#E58934',
        darkRed: '#841710',
      },
      colors: {
        wechatGreen: '#20C300',
        darkText: '#E4E6EB',
        dark: '#121212',
        blackText: '#4A4A4A',
        light: '#fafafa',
        lightGray: '#f3f3f3',
        mdGray: '#ececec',
        bgDefault: '#F9FAFC',
        lightBlue: '#EFF6FF',
        mdDarkGrayText: '#8D8D8D',
        darkGray: '#C7C7C7',
        brown: '#B79D9D',
        orange: '#E58934',
        darkRed: '#841710',
      },
      maxWidth: {
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        flying: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0.5rem)' },
          '100%': { transform: 'translateY(0)' },
        },
        badge: {
          '100%': {
            transform: 'scaleY(1.7) scaleX(1.25)',
            opacity: '0',
          },
        },
        loop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'flying-card': 'flying 3s infinite normal',
        'badge-pulse': 'badge 1.5s ease-out infinite',
        'looping-tag': 'loop 100s linear infinite',
      },
      scale: {
        '102': '1.02',
      },
      height: {
        '1/2vh': '50vh',
        '4/5vh': '80vh',
        '3/4vh': '75vh',
        '86vh': '86vh',
      },
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('tailwind-scrollbar-hide'), require('daisyui')],
};
export default config;
