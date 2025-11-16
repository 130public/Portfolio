//QUERIES FOR ALGOLIA
const PageIndexQuery = `{
  allSitePage {
    edges {
      node {
        id
        path
      }
    }
  }
}`
const ResourceIndexQuery = `{
  allContentfulResource {
    edges {
      node {
        id
        title
        description
        author
        source
        thumbnail{
          file{
            url
            fileName
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
          id
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
  arr.map(({ node }) => {
    const { internal, parent, children, ...rest } = node
    return {
      objectID: node.id,
      ...rest,
    }
  })
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