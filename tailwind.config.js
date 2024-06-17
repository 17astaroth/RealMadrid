/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-white": "#fff",
        gray: {
          "100": "#0f171e",
          "200": "rgba(255, 255, 255, 0.92)",
          "300": "rgba(0, 0, 0, 0.55)",
        },
        "default-black": "#0b0d17",
        whitesmoke: "#f0eeed",
        gainsboro: {
          "100": "#e5e5e5",
          "200": "#dbdbde",
          "300": "rgba(230, 230, 230, 0.92)",
          "400": "rgba(217, 217, 217, 0)",
        },
        skyblue: "#a5d8f4",
        darkslategray: {
          "100": "#3d404a",
          "200": "#333",
        },
        black: "#000",
        "text-gray-100": "#f4f5f7",
        "text-gray-900": "#18191f",
        goldenrod: "#edb637",
      },
      spacing: {},
      fontFamily: {
        "body-body-2": "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "381xl": "400px",
        "41xl": "60px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      xl: "20px",
      "13xl": "32px",
      "5xl": "24px",
      "3xl": "22px",
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      lgi: "19px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      "77xl": "96px",
      inherit: "inherit",
    },
    screens: {
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
