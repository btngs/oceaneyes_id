/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/features/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Nunito"],
        body: ["Nunito"],
        hero: ["Nunito"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(360deg, #004F66 74.5%, #45A0BB 99%)",
      },
      colors: {
        neutral: "#272727",
        purpleMuted: "#E4D8E2",
        purple: "#BA92B3",
        brownMuted: "#EAE2DF",
        brown: "#A4715E",
        greenMuted: "#C8D0BF",
        green: "#5D7840",
        surface: "#F6F6F6",
        primary: "#004F66",
        primaryL: "#45A0BB",
        primaryL2: "#52BEE6",
        primaryPale: "#c5e9f7",
        primaryGray: "#9EB1B6",
        primaryLGray: "#f6f8f8",
        foreground: "#06222D",
        background: "#DEE5E8",
        secondary: "#F07B4F",
        textGray: "#7F99A4",
        textDarkGray: "#4E656E",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};