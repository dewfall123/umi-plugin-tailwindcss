import { IApi, IConfig } from 'umi';
import { tailwindConfigJS, tailwindcssContent } from './constants';
import { dirname, join } from 'path';
import tailwindcssPlugin from './postcss-plugins/tailwindcss';
import fs from 'fs';

function getTailwindConfigFilePath(api: IApi) {
  const { tailwindConfigFilePath } = api.userConfig.tailwindcss || {};

  const configFile =
    tailwindConfigFilePath ||
    join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js');

  return configFile;
}

export default (api: IApi) => {
  api.describe({
    key: 'tailwindcss',
    config: {
      schema(joi) {
        return joi.object({
          tailwindCssFilePath: joi.string(),
          tailwindConfigFilePath: joi.string(),
        });
      },
    },
  });

  // 添加postcss-plugin配置
  api.modifyConfig((config: IConfig) => {
    const configPath = getTailwindConfigFilePath(api);
    config.extraPostCSSPlugins = [
      ...(config.extraPostCSSPlugins || []),
      tailwindcssPlugin({ config: configPath }),
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
    const { tailwindCssFilePath } = api.userConfig.tailwindcss || {};
    if (!tailwindCssFilePath) {
      api.writeTmpFile({
        path: `tailwind.css`,
        content: tailwindcssContent,
      });
    }

    // 添加tailwind.config.js
    const ConfigFile = getTailwindConfigFilePath(api);
    if (!fs.existsSync(ConfigFile)) {
      console.log('generate tailwind.config.js.');
      fs.writeFileSync(ConfigFile, tailwindConfigJS, 'utf8');
    }
  });

  api.addEntryImportsAhead(() => {
    const { tailwindCssFilePath } = api.userConfig.tailwindcss || {};
    return {
      source: tailwindCssFilePath || './tailwind.css',
    };
  });
};
