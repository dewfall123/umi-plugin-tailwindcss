# umi-plugin-tailwindcss

> umi-plugin-tailwindcss

## Install

Using npm:

```bash
$ npm install umi-plugin-tailwindcss -D
```

or using yarn:

```bash
$ yarn add umi-plugin-tailwindcss -D
```

## Setup
in `.umirc.ts`

```ts
// this is the default setting
tailwindcss: {
configName: 'tailwind.config.js',
purgecssOptions: {
    content: ['./src/**/*.html', './src/**/*.ejs', './src/**/*.tsx', './src/**/*.ts'],
    defaultExtractor: (content: string) =>
        content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
    },
},
```
