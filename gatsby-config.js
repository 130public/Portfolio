let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

const queries = require('./src/utils/algolia')

//CONTENTFUL
contentfulConfig = {
  spaceId: `${process.env.CONTENTFUL_SPACE_ID}` || '',
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}` || ''
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
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
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
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: `${process.env.ALGOLIA_APPID}`,
        apiKey: `${process.env.ALGOLIA_APIKEY}`,
        //indexName: process.env.ALGOLIA_INDEXNAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
}
