import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Grid from '../components/grid'
import Hero from '../templates/hero'

class ResourcesIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const resources = get(this, 'props.data.allContentfulResource.edges')

    return (
      <Container>
        <main className="main">
          <Helmet title={siteTitle} />
          <Hero data={{"title":"Resources"}} />
          <div className="wrapper">
            <Grid nodes={resources} />
          </div>
        </main>
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

