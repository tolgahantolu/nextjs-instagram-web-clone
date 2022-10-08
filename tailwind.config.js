/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0095f6",
        facebook: "#385185",
        link: "#00376b",
      },
      backgroundImage: {
        "login-pattern":
          "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
      },
    },
  },
  plugins: [],
};
