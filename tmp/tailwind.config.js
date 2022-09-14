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
        lowOpacity2: "rgba(112, 112, 112, .4)",
        lowOpacity3: "rgba(112, 112, 112, .8)",
        mainColor : "#283618",
        sideColor : "#606c38cc",

        TitleColor: "hsl(90,20%,20%)",
        DstpColor: "hsl(201,14%,36%)",
        primeryColor: "hsl(88,14%,27%)",
        AccentColor: "hsl(67,19%,78%)",
        BgColor: "hsl(49,100%,97%)",
        cta: "#3D5A80",
        ctaHover: '#304663d8',

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
          350: "#FEFAE0",
          355: "#FEFAE09E"
        },
        
      },
      
      

      

      fontFamily:{
        vazir : "Vazir",
        lalezar : "Lalezar",
      }

    },
  },
  plugins: [],
}
