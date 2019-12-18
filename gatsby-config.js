module.exports = {
  siteMetadata: {
    title: `Brian Andrews Portfolio`,
    description: `Brian Andrews Portfolio`,
    author: `Brian Andrews`,
    keywords: `gatsby, brian andrews, portfolio`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Brian Andrews Portfolio",
        short_name: "brian-andrews-portfolio",
        start_url: "/",
        background_color: "#666",
        theme_color: "#6e93a2",
        display: "standalone",
        icon: "src/images/dev-icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Source Sans Pro"],
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "yujruzjf",
        dataset: "portfolio",
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-theme-ui`,
  ],
}
