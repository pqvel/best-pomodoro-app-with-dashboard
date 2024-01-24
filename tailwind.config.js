// import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   green: "#34a853",
    //   black: "#000000",
    //   white: "#ffffff",
    //   gray: "#dadada",
    //   grayBorder: "#dadada",
    //   grayText: "#808080",
    //   red: "#ba4949",
    //   redIcon: "#ff5733",
    //   orangeIcon: "#ffa833",
    //   yellowIcon: "#ffd733",
    //   greenIcon: "#33ff33",
    //   blueIcon: "#3366ff",
    //   transparent: "transparent",
    //   blueDark: "#282848",
    // },
    animation: {
      fadein: "fadein 0.2s easy-in",
      fadeout: "fadeout 0.2s easy-in",
    },
    keyframes: {
      fadein: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeout: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },
  },
  plugins: [],
};
// satisfies Config;
