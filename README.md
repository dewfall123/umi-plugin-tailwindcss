# umi-plugin-tailwindcss

> umi-plugin-tailwindcss

[中文文档](https://github.com/dewfall123/umi-plugin-tailwindcss/blob/master/README.CN.md)

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
```ts
// .umirc.ts
// this is the default setting
tailwindcss: {
    configName: 'tailwind.config.js',
    path: '', // eg @/assets/tailwind.css
    purgecssEnable: process.env.UMI_ENV !== 'local',
    purgecssOptions: {
        content: ['./src/**/*.html', './src/**/*.ejs', './src/**/*.tsx', './src/**/*.ts'],
        defaultExtractor: (content: string) =>
            content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
    },
},
```

- **configName**
  
    If you use a name other than tailwind.config.js for the Tailwind config file, you will need to specify it in your `.umirc.ts` configuration.
    ```js
    tailwindcss: {
        configName: 'myTailwind.config.js',
    }
    ```
- **path**
  
    If path is empty. this plugin will generate a file in `.umi` directory with the content:
    ```css
    /* purgecss start ignore */
    @tailwind base;

    @tailwind components;
    /* purgecss end ignore */

    @tailwind utilities;
    ```

    If you want to custom the tailwind.css file(eg: Adding Base Styles[https://tailwindcss.com/docs/adding-base-styles]), you can set the custom file path here.
    ```js
    // .umirc.ts
    tailwindcss: {
        path: '@/assets/tailwind.css',
    },
    ```

- **purgecssEnable**
  
    Enable the `purgecss` if the value is true. Don't enable in the `dev` environment!!! Because it won't run `purgecss` again in the hot update mode.

- **purgecssOptions**
  
    By default Purgecss will look for css selectors in your .html and .ejs files inside the ./src directory and .ts(x) files inside the ./src directory.

    Check https://www.purgecss.com/configuration#options for a list of available options.