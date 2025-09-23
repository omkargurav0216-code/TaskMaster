/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ["Inter", 'sans-serif'],
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideIn: 'slideIn 0.7s ease-out forwards',
      },

      colors: {

        // primary: "#5D3A8A",       // Royal Purple
        // secondary: "#FFB347",     // Marigold
        // saffron: "#F4C430",       // Saffron
        // terracotta: "#E2725B",    // Terracotta
        // cream: "#FFF4E0",         // Light Background
        // indigoDeep: "#2C1A52",   // Dark text
        // leafGreen: "#4CAF50",     // Completed todos
        // vermillion: "#E53935",    // Delete/Error  

        // primary: "#D35400",
        // secondary: "#03045e",
        // saffron: "#ff9933ff",
        // terracotta: "#070c0fff",
        // cream: "#fffff8ff",
        // indigoDeep: "#000080ff",
        // leafGreen: "#1974d2ff",
        // vermillion: "#ff9933ff",
        // blacktext: "#1C1C1C"

        "primaryBg": "#D35400",
        "accentBg": "#03045e",
        "highlight": "#ff9933ff", // Not used
        "hoverAccent": "#070c0fff",
        "baseBg": "#fffff8ff",
        "action": "#000080ff",
        "infoText": "#1974d2ff", // Not used
        "textMain": "#1C1C1C",
        "danger": "#D84315",
        "containerBg": "#FFF8F0",
        "brandText": "#361167"
      },
    },
  },
  plugins: [],
}

