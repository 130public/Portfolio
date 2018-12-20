import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Grid from '../components/grid'
import Hero from '../templates/hero'

class ProjectsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <Container>
        <Main alt={false} offset={true}>
          <Helmet title={siteTitle} />
          <Hero data={{"title":"Projects"}} />
          <div className="wrapper">
            <Grid nodes={projects} />
          </div>
        </Main>
      </Container>
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
