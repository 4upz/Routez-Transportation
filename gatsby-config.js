module.exports = {
  siteMetadata: {
    title: `Routez Transportation`,
    description: `Routez Transportation Service - A Black-owned transportation business located in Clevelad, Ohio.`,
    author: `@the4upz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Routez Transportation`,
        short_name: `Routez`,
        start_url: `/`,
        background_color: `#f4f7f5`,
        theme_color: `#ffd522`,
        display: `minimal-ui`,
        icon: `src/images/RTlogo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
