export const tailwindcssContent = `/* purgecss start ignore */

@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
`;

export const tailwindConfigJS = `module.exports = {
    // mode: 'jit',
    // jit document: https://tailwindcss.com/docs/just-in-time-mode
    purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
    darkMode: false, // or 'media' or 'class'
    theme: {},
    variants: {
      extend: {},
    },
    plugins: [],
};
`;
