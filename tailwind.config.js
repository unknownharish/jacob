module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    extend: {
      backgroundImage: {

        'startupmain': "url('/images/startup/main.webp')",  
        'mobile': "url('/images/Kids/BackgroundMobile.png')",  
        'web':"url('/images/Kids/BackgroundWeb.png')",
        'actionModal':"url('/images/action/modal-bg.png')",
        'journey':"url('/images/journey/Background.png')",
        "yt":"url('/images/yt/bg_image.png')",
        "play":"url('/images/play/bg-game.webp')",
        "sdg":"url('/images/sdg/bg-sdg.webp')",
        "donation":"url('/images/donation/bg-donation.webp')",
        "mainbg":"url('/images/startup/mainbg.webp')",
        "action-":"url('/images/startup/action-bg.webp')",
      },
      colors: {
        'header-pattern': 'black',
	      'blue-pattern': '#21BDFF',
	      'purple-pattern': '#613CE0',
	      'pink-pattern':' #f83bc1',
        'gray-pattern': '#EBEBEB'
      },
      fontFamily: {
        'pt-sans': ['"Pt Sans"', 'sans-serif'],
      },
      keyframes: {
        openEffect: {
          '0%': { opacity: 0 },
          '25%': { opacity: 0.25 },
          '50%': { opacity: 0.5 },
          '75%': { opacity: 0.75 },
          '100%': { opacity: 1 },
        },
        closeEffect: {
          '0%': { opacity: 1 },
          '25%': { opacity: 0.75 },
          '50%': { opacity: 0.5 },
          '75%': { opacity: 0.25 },
          '100%': { opacity: 0 },
        },
        },
        animation: {
        'openMenu': 'openEffect 0.5s linear',
        'closeMenu': 'closeEffect 1s linear',
        }, 
    },
  },
  plugins: [],
};