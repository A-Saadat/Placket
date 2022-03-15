module.exports = {
  content: ["./Src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customLowOpacityBlack: "rgba(0, 0, 0, .01)",
        custompink : "rgb(255, 151, 157)",
        customorange: "rgb(255, 189, 48)",
        customindigo: "rgb(209, 185, 252)",
        customgreen: "rgb(180, 240, 225)",
        customgray: "rgb(174, 186, 197)"
      },
      boxshadow: {
        customPinkboxShadow: "box-shadow: rgb(255, 151, 157) 0 0 40px",
        customorangeboxShadow: "rgb(255, 189, 48) 0 0 40px",
        customindigoboxShadow: "rgb(209, 185, 252) 0 0 40px",
        customgreenboxShadow: "rgb(180, 240, 225) 0 0 40px",
        customgrayboxShadow: "rgb(174, 186, 197) 0 0 40px"
      },

      fontFamily: {
        'lalezar': "lalezar",
      }
    },
  },
  plugins: [],
}
