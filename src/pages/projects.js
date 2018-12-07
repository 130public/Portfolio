import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import heroStyles from '../components/hero.module.css'
import ProjectGrid from '../components/project-grid'

class ProjectsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={heroStyles.hero}>
          Projects
        </div>
        <div className="wrapper">
          <ProjectGrid nodes={projects} />
        </div>
      </div>
    )
  }
}

export default ProjectsIndex

export const pageQuery = graphql`
  query ProjectsPageQuery {
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

