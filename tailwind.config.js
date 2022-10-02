module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        "dela-gothic-one": ["Dela Gothic One"],
        "noto-serif-jp": ["Noto Serif JP"],
      },
      colors: {
        primary: "#B9060D",
        secondary: "#4C6B8C",
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
