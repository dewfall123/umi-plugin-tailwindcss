# umi-plugin-tailwindcss

> umi-plugin-tailwindcss，仅对 3.x 有效。umi4 内置支持 tailwind 了，新项目已经不需要此插件了 [umi4 tailwind-css 文档](https://umijs.org/docs/guides/generator#tailwind-css-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%88%90%E5%99%A8)

## 安装

通过 `npm` 安装:

```bash
$ npm install umi-plugin-tailwindcss -D
```

或者使用 `yarn`:

```bash
$ yarn add umi-plugin-tailwindcss -D
```

## 配置

`tailwindCssFilePath?: string`.

引入的 tailwindcss 文件，可缺省。

```ts
// .umirc.ts
// 示例配置
...
tailwindcss: {
  tailwindCssFilePath: '@/tailwind.css',
  tailwindConfigFilePath: 'tailwind-custom.config.js' // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),,
},
...
```

## 说明

此插件会自动完成引入`tailwind`[所需做的事情](https://tailwindcss.com/docs/installation)。

1. 自动添加`tailwindcss`依赖。
   对于 4.x 版本: 默认安装最新版本 tailwindcss
   对于 3.x 版本: 默认安装的是最新版本的[@tailwindcss/postcss7-compat](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build)，因为目前 umi 不支持 postcss8）。

   你也可以安装指定的 tailwindcss 版本，插件会优先使用`devDependencies`里面的`tailwindcss`包，如果不存在，会使用`@tailwindcss/postcss7-compat`。

2. 将 Tailwind 添加到你的 CSS 代码中。如果`tailwindCssFilePath`配置存在，会使用该路径的文件。如果缺少，会创建一份临时文件，并引入该临时文件。
3. 检查`tailwindConfigFilePath`是否存在`tailwind.config.js`配置文件。若缺少，会添加一份配置文件。
4. 添加 umi 的`postcss`对应的插件。
