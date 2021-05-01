//QUERIES FOR ALGOLIA
const PageIndexQuery = `{
  allSitePage {
    edges {
      node {
        objectID: id
        component
        path
        componentChunkName
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
        author
        source
        thumbnail{
          file{
            url
            fileName
          }
          fluid(quality: 85, maxWidth: 320) {
            src
          }
          title
          description
        }
        skills {
          ... on ContentfulSkill {
            name
          }
        }
        updatedAt
        createdAt
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
            fluid(quality: 10, maxWidth: 320) {
              src
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