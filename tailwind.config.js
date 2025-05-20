/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': 'rgb(0, 191, 255)',
        'teal': 'rgb(79, 209, 197)',
        'crimson': 'rgb(255, 76, 76)',
        'dark': {
          DEFAULT: 'rgb(26, 32, 44)',
          deeper: 'rgb(13, 16, 22)'
        }
      },
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 