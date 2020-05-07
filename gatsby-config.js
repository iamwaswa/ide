require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  developMiddleware: app => {
    app.use(
      `/.netlify/functions`,
      createProxyMiddleware({
        target: 'http://localhost:8000',
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

        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_READ_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/session/*`] },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID
        }
      }
    },
    'gatsby-plugin-typescript',
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
  ],
};
