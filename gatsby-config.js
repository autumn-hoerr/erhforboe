module.exports = {
  siteMetadata: {
    title: 'Elena Rosemond-Hoerr for NHC Board of Education',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img`
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
