module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'white': '0 0 .6rem #cfcfcf',
        'green': '0 0 .6rem #15a815',
        'red': '0 0 .6rem #ff0000',
        'blue': '0 0 .6rem #0000ff',
        'yellow': '0 0 .6rem #ffff00',
        'purple': '0 0 .6rem #800080',
        'orange': '0 0 .6rem #ffa500',
        'sky': '0 0 .6rem #00ffff',
      }
    },
  },
  plugins: [],
}