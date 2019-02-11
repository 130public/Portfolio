require('dotenv').config()

//CONTENTFUL
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
}
const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
throw new Error(
  'Contentful spaceId and the delivery token need to be provided.'
)
}

//PLUGINS
module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  siteMetadata: {
    title: `the portfolio of Jason J Geiger`,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: false,
          camelCase: true,
          localIdentName: '[name]--[local]'
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
