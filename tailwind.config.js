/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#19183A",
          light: "#474661",
          dark: "#111028",
        },
        secondary: {
          main: "#F4693B",
          light: "#ffe5de",
          dark: "#aa4929",
        },
      },
    },
  },
  plugins: [],
};
