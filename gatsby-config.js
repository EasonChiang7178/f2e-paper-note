module.exports = {
  pathPrefix: "/f2e-paper-note",
  siteMetadata: {
    title: `Paper Note`,
    description: `身邊沒紙時，只好用零食包裝紙背面來寫的開心 | Designed by Niki`,
    author: `@EasonChiang7178`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `paper-note`,
        short_name: `note`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#C3C3BB`,
        display: `minimal-ui`,
        icon: `src/images/paper-note-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
