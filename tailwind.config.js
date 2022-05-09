module.exports = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
        "burgerMenu":"cubic-bezier(.53,0,1,.67)"
      },
      transitionDelay:{
        "0":"0ms",
        "25":"25ms",
        "50":"50ms",
        "75":"75ms",
        "100":"100ms",
        "125":"125ms",
        "150":"150ms",
        "125":"125ms",
        "150":"150ms",
        "175":"175ms",
        "200":"200ms"
      },
      spacing:{
        "1/10":"10%"
      }
    },
  },
  plugins: [],
}
