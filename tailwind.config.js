/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,astro}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2D3748',
        'secondary': '#1A202C',
        'accent': '#F56565',
      },
    },
  },
  plugins: [],
};

export default config;
