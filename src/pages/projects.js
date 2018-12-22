import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Hero from '../templates/hero'
import Projects from '../components/grid-projects'

class ProjectsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')

    return (
      <Container>
        <Main padTop='large' style="alt" offset={false}>
          <Helmet title={siteTitle} />
          <Hero data={{"title":"Projects"}} />
          <div className="wrapper">
            <Projects />
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

