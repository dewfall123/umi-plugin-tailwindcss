import { IApi, IConfig } from 'umi';
import { tailwindcssContent } from './constants';
import { dirname } from 'path';
import tailwindcssPlugin from './postcss-plugins/tailwindcss';
import purgecssPlugin from './postcss-plugins/purgecss';

export default (api: IApi) => {
  api.describe({
    key: 'tailwindcss',
    config: {
      schema(joi) {
        return joi.object({
          configName: joi.string(),
          purgecssOptions: joi.object(),
        });
      },
    },
  });

  // 添加postcss-plugin配置
  api.modifyConfig((config: IConfig) => {
    const { configName, purgecssOptions } = api.userConfig.tailwindcss || {};

    config.extraPostCSSPlugins = [
      ...(config.extraPostCSSPlugins || []),
      configName ? tailwindcssPlugin(configName) : tailwindcssPlugin,
      purgecssPlugin(purgecssOptions),
    ];
    return config;
  });

  // 添加依赖
  api.addProjectFirstLibraries(() => [
    {
      name: 'tailwindcss',
      path: dirname(require.resolve('tailwindcss/package.json')),
    },
  ]);

  // 添加文件
  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: `tailwind.css`,
      content: tailwindcssContent,
    });
  });

  api.addEntryImportsAhead(() => {
    return {
      source: './tailwind.css',
    };
  });
};
