import path from 'path';

export const onCreateWebpackConfig = ({ actions }) =>
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        [`@components`]: path.resolve(__dirname, `src/components`),
        // eslint-disable-next-line no-undef
        [`@context`]: path.resolve(__dirname, `src/context`),
        // eslint-disable-next-line no-undef
        [`@hooks`]: path.resolve(__dirname, `src/hooks`),
        // eslint-disable-next-line no-undef
        [`@layouts`]: path.resolve(__dirname, `src/layouts`),
        // eslint-disable-next-line no-undef
        [`@theme`]: path.resolve(__dirname, `src/theme`),
        // eslint-disable-next-line no-undef
        [`@types`]: path.resolve(__dirname, `src/types`),
      },
    },
  });
