require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  developMiddleware: app => {
    app.use(
      `/.netlify/functions`,
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          [`^/\\.netlify/functions`]: ''
        }
      })
    )
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IDE`,
        short_name: `IDE`,
        description: `An educational IDE platform`,
        start_url: `/`,
        background_color: `#F9F9F9`,
        theme_color: `#2196f3`,
        display: `fullscreen`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_READ_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/session/*`] },
    },
    'gatsby-plugin-typescript',
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
  ],
};
