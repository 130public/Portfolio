//QUERIES FOR ALGOLIA
const PageIndexQuery = `{
  allSitePage {
    edges {
      node {
        objectID: id
        component
        path
        componentChunkName
        jsonName
        internal {
          type
          contentDigest
          owner
        }
      }
    }
  }
}`
const ResourceIndexQuery = `{
  allContentfulResource {
    edges {
      node {
        title
        description
        source
        thumbnail{
          file{
            url
            fileName
          }
          title
          description
        }
        updatedAt
      }
    }
  }
}`
const ProjectIndexQuery = `{
  allContentfulProject {
    edges {
        node {
          title
          slug
          description{
            description
          }
          thumbnail{
            file{
              url
              fileName
            }
            title
            description
          }
          body{
            body
          }
        }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: PageIndexQuery,
    transformer: ({ data }) => flatten(data.allSitePage.edges),
    indexName: `Page`,
    settings,
  },
  {
    query: ResourceIndexQuery,
    transformer: ({ data }) => flatten(data.allContentfulResource.edges),
    indexName: `Resource`,
    settings,
  },
  {
    query: ProjectIndexQuery,
    transformer: ({ data }) => flatten(data.allContentfulProject.edges),
    indexName: `Project`,
    settings,
  }
]

module.exports = queries