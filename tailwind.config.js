module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "678px",
      md: "1000px",
      lg: "1020px",
      xl: "1440px",
      xsm: "552px",
      mobile: "434px",
    },
    extend: {
      colors: {
        darkblue: "#121725",
        lightpurple: "#2C344B",
        cyanish: "#54E6AF",
        ghost: "#5A668A",
        purple2: "#C2CBE5",
        stroke: "#979797",
      },
      fontFamily: {
        serif: ["Archivo", "sans-serif"],
      },
      fontWeight: {
        thiner: ["5"],
      },
    },
  },
  plugins: [],
};
