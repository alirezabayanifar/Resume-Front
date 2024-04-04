/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./*.{js,ts,jsx,tsx,html}",
    "./pages/*.html",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '18px',
        sm: '0',
        'xl': '80px'
      },
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  }
}

