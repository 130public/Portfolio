import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Hero from '../templates/hero'
import Resources from '../components/grid-resources'

class ResourcesIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const resources = get(this, 'props.data.allContentfulResource.edges')

    return (
      <Container>
        <Main padTop='large' style="" offset={false}>
          <Helmet title={siteTitle} />
          <Hero data={{"title":"Resources"}} />
          <Resources />
        </Main>
      </Container>
    )
  }
}

export default ResourcesIndex

export const pageQuery = graphql`
  query ResourcesPageQuery {
    allContentfulResource {
      edges {
        node {
          title
          description
          source
        }
      }
    }
  }
`