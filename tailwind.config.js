/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
      },
       
      colors: {
        'gray': "#737376",
        'light-gray': "#F5F9FC",
        'gray-200': "#D4D4D4",
        'light-blue':"#D1E0E9",
      },

      fontSize: {
        'custom-xl':"28px"
      },

      lineHeight: {
        'custom-2xl': "21px",
        'custom-3xl': "30px",
        'custom-4xl': "44px",
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(80.25deg, #0071BB 0.38%, #39A3E7 98.6%)',
      },
    },
  },
  plugins: [],
}

