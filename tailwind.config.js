/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         ...require("daisyui/src/theming/themes")["light"],
  //         primary: "#4BA586",
  //         ".btn-primary": {
  //           color: "White",
  //         },
  //       },
  //     },
  //   ],
  // },
};
