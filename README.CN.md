# umi-plugin-tailwindcss

> umi-plugin-tailwindcss

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
一般来说，不需要修改默认配置就可以使用，在非`local`环境，会启用`purgecss`插件，去除额外的`tailwindcss` 样式。

```ts
// .umirc.ts
// 默认配置
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
  
    如果你需要自定义tailwind配置文件名，你可以这样设置:
    ```js
    tailwindcss: {
        configName: 'myTailwind.config.js',
    }
    ```
- **path**
  
    path默认是空，会在`.umi`里面生成一个`tailwind.css`文件并自动import，内容如下:
    ```css
    /* purgecss start ignore */
    @tailwind base;

    @tailwind components;
    /* purgecss end ignore */

    @tailwind utilities;
    ```

    如果你需要自定义`tailwind.css`文件的内容（例如[https://www.tailwindcss.cn/docs/adding-base-styles]），你可以设置`path`，值是文件路径。
    ```js
    // .umirc.ts
    tailwindcss: {
        path: '@/assets/tailwind.css',
    },
    ```

- **purgecssEnable**
  
    是否开启`purgecss`。默认值是`process.env.UMI_ENV !== 'local'`，这意味着在`local`环境不会开启`purgecss`。也不要在`dev`模式开启这个选项!!! 因为热更新不会重新运行`purgecss`。

- **purgecssOptions**

    详情见 https://www.purgecss.com/configuration#options .