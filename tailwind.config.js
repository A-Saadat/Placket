module.exports = {
  content: ["./Src/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        green:{
          250: "#C2C5AA",
          350: "#606C38",
          450: "#464f3c", 
          650: "#333D29",
          750: "#283618",

        },
        lowOpacity: "rgba(112, 112, 112, .2)",

        gray:{
          250: "#fffcee",
          550: "#4f6069",
          350: "#5f6e77",
        },
        slate:{
          850: "#362C36",
          550: "#4D4C59",
          350: "#71777D"
        },

        zink:{
          250: "a4ac86",
          50: "c2c5aa"
        },

        blue:{
          50: "#A7CBD5"
        },
        light:{
          150: "#F7F6F0",
          350: "#FEFAE0"
        }
      },

      

      fontFamily:{
        vazir : "Vazir",
        lalezar : "Lalezar",
        YekanBakh : "Yekan Bakh"
      }

    },
  },
  plugins: [],
}
