/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    fontFamily: {
        roboto: ['Roboto'],
        robotoMono:['roboto-light']
    },
    extend: {
      colors:{
        primary:'#DD9FAF',
        second: '#FCDDE4',
        third: '#170C10',
        quarter: '#EECFD7',
        quinto: '#8E4256',
        sexto: '#070405'
      },
      boxShadow: {
        'inner': 'inset 0px 0px 20px 0px rgba(0,0,0,0.1)',
      },
      filter: {
        'dark-custom': 'hue-rotate(90deg) brightness(1.25) contrast(1.5)',
      },
      keyframes: {
        pulse: {
          'to': {
            transform: 'translate3d(0px, 0px, -60px)',
            boxShadow: '15px 15px 20px -20px rgba(0, 0, 0, 0.8)',
          },
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',  // Ajusta la duración y el comportamiento de la animación
      },
    },
    container:{
      center: true,
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

