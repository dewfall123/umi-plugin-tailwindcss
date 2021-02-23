export const tailwindcssContent = `/* purgecss start ignore */
@tailwind base;

@tailwind components;
/* purgecss end ignore */

@tailwind utilities;

// 用于修正 antd svg icon 位置向下偏移的 bug
svg {
  vertical-align: initial;
}
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
