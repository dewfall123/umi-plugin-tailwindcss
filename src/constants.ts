export const tailwindcssContent = `/* purgecss start ignore */
@tailwind base;

@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
`;

export const tailwindConfigJS = `module.exports = {
    purge: {
        mode: 'layers',
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
        options: {
        whitelist: [],
        },
    },
    theme: {},
    variants: {},
    plugins: [],
};
`;
