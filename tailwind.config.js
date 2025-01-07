/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        94: "22rem",
      },
      colors: {
        primary: "#031716",
        secondary: "#032F30",
        tertiary: "#0A7075",
        quaternary: "#0C969C",
        quinary: "#274D60",
      },
      screens: {
        md1: "800px",
        lg1: "1250px",
        lg2: "1400px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right bottom, #0a7075, #0b777c, #0b7e83, #0c858b, #0c8c92, #0c8992, #0e8692, #118391, #197587, #20677b, #255a6e, #274d60)",
      },
      backgroundColor: (theme) => theme("colors"), // Usamos los colores definidos
      textColor: (theme) => theme("colors"), // Usamos los colores definidos
      borderColor: (theme) => theme("colors"), // Usamos los colores definidos
    },
  },
  plugins: [],
};
