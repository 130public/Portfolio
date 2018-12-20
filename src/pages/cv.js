import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Article from '../templates/article'

class Cv extends React.Component {
  render() {
    const data = get(this, 'props.data')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const resources = get(this, 'props.data.allContentfulResource.edges')
    return (
      <Container>
        <Main padTop='large' style="fun" offset={true}>
          <Helmet title={siteTitle} />
          <Article />
        </Main>
        </Container>
    )
  }
}

export default Cv
