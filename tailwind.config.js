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
        "rich-black-fogra-29": "#001219ff",
        "blue-sapphire": " #005f73ff",
        "viridian-green": "#0a9396ff",
        "middle-blue-green": "#94d2bdff",
        "medium-champagne": "#e9d8a6ff",
        gamboge: "#ee9b00ff",
        "alloy-orange": "#ca6702ff",
        rust: "#bb3e03ff",
        rufous: "#ae2012ff",
        "sonic-silver": "#6c757dff",
        cultured: "#f8f9faff",
        "ruby-red": "#9b2226ff",
      },
    },
  },
  plugins: [],
};
