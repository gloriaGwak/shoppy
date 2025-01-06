/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
    },
    extend: {
      screens: {
        sm: { max: "767px" },
        md: { max: "1023px" },
        // md: { min: '768px', max: '1023px' },
        lg: { max: "1400px" },
        // xl: { min: "1401px", max: "1920px" }
      },
      accentColor: theme => ({
        ...theme('colors'),
        'sky': '#73c7e3',
        'linen': '#fff9f0',
        'mint': '#24b0ba',
        'lightGray': '#f0f2f2',
        'navy': '#2e4a70',
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
        'sky': '#73c7e3',
        'linen': '#fff9f0',
        'mint': '#24b0ba',
        'lightGray': '#f0f2f2',
        'navy': '#2e4a70',
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'sky': '#73c7e3',
        'linen': '#fff9f0',
        'mint': '#24b0ba',
        'lightGray': '#f0f2f2',
        'navy': '#2e4a70',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'sky': '#73c7e3',
        'linen': '#fff9f0',
        'mint': '#24b0ba',
        'lightGray': '#f0f2f2',
        'navy': '#2e4a70',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'sky': '#73c7e3',
        'linen': '#fff9f0',
        'mint': '#24b0ba',
        'lightGray': '#f0f2f2',
        'navy': '#2e4a70',
      })
      // spacing: {
      //   'safe-x': '10vw', // 화면 너비의 10%만큼의 좌우 여백
      // },
      // maxWidth: {
      //   'safe': 'calc(100% - 20vw)',  // 좌우 여백을 제외한 최대 너비
      // },
    },
  },
  plugins: [],
}

