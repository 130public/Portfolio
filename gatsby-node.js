const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectItems = path.resolve('./src/components/project/index.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulProject.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/projects/${post.node.slug}/`,
            component: projectItems,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}