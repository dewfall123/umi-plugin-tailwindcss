import postcss from 'postcss';
import path from 'path';
import purgecss from '@fullhuman/postcss-purgecss';

const config = {
  content: [
    './src/**/*.html',
    './src/**/*.ejs',
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  defaultExtractor: (content: string) =>
    content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
};

export default (paths: string[]) => {
  const generatedFilePaths = [
    ...paths.map((p: string) =>
      path.join(process.cwd(), p.replace('@', './src')),
    ),
    path.join(process.cwd(), 'src/.umi/tailwind.css'),
  ];
  return postcss.plugin('tailwind-purgecss', (opts: any) => {
    return (root, result) => {
      // 只对生成的tailwind.css 文件做purgecss处理 否则会影响antd的css
      if (
        root.source &&
        generatedFilePaths.includes(root.source.input.file as string)
      ) {
        const fn = purgecss(Object.assign(config, opts));
        return fn(root, result);
      }
      return () => {};
    };
  });
};
