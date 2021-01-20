export const tailwindcssContent = `/* purgecss start ignore */
@tailwind base;

@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
`;

export const tailwindConfigJS = `module.exports = {
    purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
    darkMode: false, // or 'media' or 'class'
    theme: {},
    variants: {
      extend: {},
    },
    plugins: [],
};
`;
