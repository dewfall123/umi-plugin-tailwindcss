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

`tailwindCssFilePath?: string`.

tailwind.css file path, can be missing。

```ts
// .umirc.ts
// eg
...
tailwindcss: {
  tailwindCssFilePath?: '@/tailwind.css',
  tailwindConfigFilePath?: 'tailwind-custom.config.js' // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),
},
...
```

## Explain

This plugin do the [following things](https://tailwindcss.com/docs/installation) to support tailwind in umi。

1. Add `tailwindcss` dependencies auto。
2. Add Tailwind to your CSS。If `tailwindCssFilePath` setting exist, plugin will import this css file automatically. If not exist, will create a temporary file, and import it.
3. If `tailwind.config.js` not exist at `tailwindConfigFilePath`, it will create one。
4. Add postcss plugin in umi。
