export const tailwindcssContent = `/* purgecss start ignore */

@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
`;

export const tailwindConfigJS = `
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;
