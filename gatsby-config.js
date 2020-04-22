require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
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
    'gatsby-plugin-typescript',
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
  ],
};
