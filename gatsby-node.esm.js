import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import path from 'path';

export const onCreateWebpackConfig = ({ actions, loaders, stage }) => {
  if (stage === `build-html`) {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /quill/,
            use: loaders.null(),
          },
          {
            test: /react-monaco-editor/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    plugins: [
      new MonacoWebpackPlugin({
        languages: ['cpp', 'go', 'java', 'javascript', 'php', 'python', 'ruby'],
      }),
    ],
    resolve: {
      alias: {
        /* eslint-disable */
        [`@components`]: path.resolve(__dirname, `src/components`),
        [`@context`]: path.resolve(__dirname, `src/context`),
        [`@hooks`]: path.resolve(__dirname, `src/hooks`),
        [`@layouts`]: path.resolve(__dirname, `src/layouts`),
        [`@theme`]: path.resolve(__dirname, `src/theme`),
        [`@types`]: path.resolve(__dirname, `src/types`),
        [`@enums`]: path.resolve(__dirname, `src/enums`),
        [`@utils`]: path.resolve(__dirname, `src/utils`),
      },
    },
  });
};
