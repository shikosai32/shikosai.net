module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        "roboto-serif": ["Roboto Serif"],
      },
      keyframes: {
        display: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
