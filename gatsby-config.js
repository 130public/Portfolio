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
    title: ` - The portfolio of Jason J Geiger`,
    url: `https://130public.net/`
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
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
        chunkSize: 100000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-244078-1",
        head: false, // Puts tracking script in the head instead of the body
        anonymize: true, // Setting this parameter is optional
        respectDNT: true, // Setting this parameter is also optional
        //exclude: ["/preview/**", "/do-not-track/me/too/"], // Avoids sending pageview hits from custom paths
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID", // Enables Google Optimize using your container Id
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID", // Enables Google Optimize Experiment ID
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID", // Set Variation ID. 0 for original 1,2,3....
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "130public.net",
      },
    },
  ],
}
