//AGOLIA
const pageQuery = `{
  
    allContentfulProject {
      edges {
        node {
          title
          slug
          description
        }
      }
    }
  }`
  const settings = { attributesToSnippet: [`description:20`] }
  
  const queries = [
    {
      query: pageQuery,
      indexName: `130public`,
      settings,
    },
  ]
  
  module.exports = queries