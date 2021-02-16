module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main: "url('public/images/wendell-shinn-dWC-Nijufzo-unsplash.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
