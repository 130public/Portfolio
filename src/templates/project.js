import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import heroStyles from '../components/hero.module.css'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={heroStyles.hero}>
          {project.title}
        </div>
        <div className="wrapper">
          <pre>{JSON.stringify(project,null, 2)}</pre>
        </div>
      </div>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
    }
  }
`
