module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all React files are covered
  ],
  theme: {
    extend: {
      screens: {
        'custom-nav':'920px'
      }
    },
  },
  plugins: [],
};
