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
        ],
      },
    });
  }

  actions.setWebpackConfig({
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
