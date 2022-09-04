/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Rogelio Umbay Portfolio`,
    description: `My Portfolio using Gatsby and Strapi`,
    titleTemplate: `%s | Umbay Portfolio`,
    url: `https://rogelio-umbay-temp-portfolio.netlify.app`,
    twitterUsername: `@S22Daisy`,
    image: `/mainImg.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`education`, `project`, `skill`, `experience`],
        singleTypes: [`about`],
      },
    },
  ],
}
