const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  /*
  const projectTemplate = path.resolve('./src/components/project/index.js')
  const noteTemplate = path.resolve('src/components/note/index.js');
  const projects = new Promise((resolve, reject) => {
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
            component: projectTemplate,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
  const notes = new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulNote {
              edges {
                node {
                  id
                  title
                  slug
                  resources{
                    ... on ContentfulResource{
                      id 
                      title
                      description
                      source
                    }
                  }
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
        const posts = result.data.allContentfulNote.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/notes/${post.node.slug}/`,
            component: noteTemplate,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
  return Promise.all([projects, notes]);
  */
}
