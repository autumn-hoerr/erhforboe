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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/markdown`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-101927620-1",
        anonymize: true,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
