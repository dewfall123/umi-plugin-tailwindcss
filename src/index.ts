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
          purgecssEnable: joi.boolean(),
          purgecssOptions: joi.object(),
          path: joi.string(),
        });
      },
    },
  });

  // 添加postcss-plugin配置
  api.modifyConfig((config: IConfig) => {
    const {
      configName,
      purgecssOptions,
      purgecssEnable = process.env.UMI_ENV !== 'local',
      path,
    } = api.userConfig.tailwindcss || {};

    config.extraPostCSSPlugins = [
      ...(config.extraPostCSSPlugins || []),
      configName ? tailwindcssPlugin(configName) : tailwindcssPlugin,
    ];

    if (purgecssEnable) {
      const purgePaths = path ? [path] : [];
      config.extraPostCSSPlugins.push(
        purgecssPlugin(purgePaths)(purgecssOptions),
      );
    }
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
    const { path } = api.userConfig.tailwindcss || {};
    if (!path) {
      api.writeTmpFile({
        path: `tailwind.css`,
        content: tailwindcssContent,
      });
    }
  });

  api.addEntryImportsAhead(() => {
    const { path } = api.userConfig.tailwindcss || {};
    return {
      source: path || './tailwind.css',
    };
  });
};
