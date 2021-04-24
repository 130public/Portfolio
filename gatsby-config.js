let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

const queries = require('./src/utilities/Algolia')

module.exports = {
  siteMetadata: {
    title: "Jason Geiger portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          "68f4f2c9ba85231a695386aa69ce19581d497aed789637bbaf095aa38bdfdbb9",
        spaceId: "f5w9mtqq7f31",
      },
    },
    {
      resolve: 'gatsby-plugin-algolia-search',
      options: {
        appId: `${process.env.ALGOLIA_APPID}`,
        apiKey: `${process.env.ALGOLIA_APIKEY}`,
        //indexName: process.env.ALGOLIA_INDEXNAME, // for all queries
        queries,
        enablePartialUpdates: true,
        chunkSize: 100000, // default: 1000
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-244078-1",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
