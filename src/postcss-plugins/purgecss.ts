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

const plugin = postcss.plugin('tailwind-purgecss', (opts: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return () => {};
  }
  const generatedFilePath = path.join(process.cwd(), 'src/.umi/tailwind.css');
  return (root, result) => {
    // 只对生成的tailwind.css 文件做purgecss处理 否则会影响antd的css
    if (root.source && root.source.input.file === generatedFilePath) {
      const fn = purgecss(Object.assign(config, opts));
      return fn(root, result);
    }
    return () => {};
  };
});

export default plugin;
