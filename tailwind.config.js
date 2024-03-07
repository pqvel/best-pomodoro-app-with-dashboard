export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      shadow: {
        border: "inset 0 0 0 1px rgba(0, 0, 0, 0.05)",
      },
    },
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
};
// satisfies Config;
