module.exports = {
  content: [
    "./public/index.html",
    "./index.js",
    "./lib/*.js",
    "./src/generateMarkup.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        cultured: "#f8f9faff",
        "cultured-2": "#e9ecefff",
        gainsboro: "#dee2e6ff",
        "light-gray": "#ced4daff",
        "cadet-blue-crayola": "#adb5bdff",
        "sonic-silver": "#6c757dff",
        "davys-grey": "#495057ff",
        onyx: "#343a40ff",
        "eerie-black": "#212529ff",
      },
    },
  },
  plugins: [],
};
