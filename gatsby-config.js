module.exports = {
  siteMetadata: {
    title: `Memorandum`,
    description: `Website criado para o projeto Memorandum UC Projeto 2019 UA`,
    author: `@DinisRodrigues`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
  plugins: [
    'gatsby-transformer-json',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/data`,
      name: "data",
    },
  },  
],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `galImages`,
        path: `${__dirname}/src/galImages`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Memorandum`,
        short_name: `Memorandum`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/memo_small.png`, // This path is relative to the root of the site.
      },
    },
      `gatsby-transformer-remark`,
      'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    
 

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

