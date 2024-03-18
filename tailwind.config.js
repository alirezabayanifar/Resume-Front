/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./*.{js,ts,jsx,tsx,html}",
    "./pages/*.html",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    dir: 'rtl',
    container: {
      center: true,
      padding: {
        DEFAULT: '18px',
        sm: '0',
        'xg': '70px'
      },
    },
    fontWeight: {
      thin: '100',
      light: '200',
      normal: '300',
      medium: '400',
      semibold: '500',
      bold: '600',
      extrabold: '700',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xg: '1280px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        Anjoman: ['Anjoman', 'sans-serif'],
      },
      borderRadius: {
        'lg': '10px',
        'xl': '15px'
      },
      backgroundImage: {
        roads: "url('public/svg/bg-roads.svg')",
      },
      colors: {
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")]
}

