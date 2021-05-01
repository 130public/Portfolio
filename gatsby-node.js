exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve(`./src/templates/Project/Project.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {type: {in: "project"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              type
              slug
              title
              description
              role
              cover
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/projects/'+node.frontmatter.slug,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}