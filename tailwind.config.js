module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        "noto-serif-jp": ["Noto Serif JP"],
        "roboto-serif": ["Roboto Serif"],
        "dela-gothic-one": ["Dela Gothic One"],
      },
      colors: {
        primary: "#B9060D",
        secondary: "#4C6B8C",
        success: "#4ECB71",
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
