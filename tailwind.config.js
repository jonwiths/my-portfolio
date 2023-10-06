/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans']
      },
      keyframes: {
        pulse: {
          '30%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      animation: {
        pulse: 'pulse 3s ease-in-out infinite',
        bounce: 'bounce 3s ease-in-out infinite' // You can adjust the duration here
      }
    }
  },
  plugins: []
};
