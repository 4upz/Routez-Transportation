module.exports = {
  siteMetadata: {
    title: `Routez Transportation`,
    description: `Routez Transportation Service - A Black-Owned transportation business located in Cleveland, Ohio.`,
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
        theme_color: `#f4f7f5`,
        display: `minimal-ui`,
        icon: `src/images/RTlogo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.jsx`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
