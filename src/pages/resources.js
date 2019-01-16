import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Hero from '../templates/hero'
import Resources from '../components/grid-resources'

class ResourcesIndex extends React.Component {
  render() {
    const{data,location} = this.props;

    return (
      <Container>
        <Helmet>
          <title>{data.contentfulPage.metaTitle} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={location.href} />
          <meta name="description" content={data.contentfulPage.metaDescription} />
          <meta property="og:type" content="article" />
        </Helmet>
        <Hero title={data.contentfulPage.title} body="" className="margin" />
        <Main padTop='large' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <Resources />
        </Main>
      </Container>
    )
  }
}

export default ResourcesIndex

export const resourcesPageQuery = graphql`
  query resourcesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "resources" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-D")
    }
  }
`