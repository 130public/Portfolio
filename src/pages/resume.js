import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Hero from '../templates/hero'
import Article from '../templates/article'

class Resume extends React.Component {
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
        <Hero title={data.contentfulPage.title} body="" style="default" />
        <Main padTop='large' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <Article title="Jason J. Geiger" content={"content"} />
        </Main>
        </Container>
    )
  }
}

export default Resume

export const cvPageQuery = graphql`
  query cvPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "resume" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-D")
    }
  }
`