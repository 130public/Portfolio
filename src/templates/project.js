import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Container from '../templates/container'
import Main from '../templates/main'
import Article from './article'
import styles from './project.module.scss'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Container>
      <Main alt={false} offset={true}>
        <Helmet title={siteTitle} />
        <Article />
          <pre>{JSON.stringify(project,null, 2)}</pre>
      </Main>
    </Container>
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
