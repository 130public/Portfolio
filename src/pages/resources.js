import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Page from '../components/page'
import Hero from '../components/hero'
import Main from '../components/main'
import Search from '../components/search'

class ResourcesIndex extends React.Component {
  render() {
    const{data,location} = this.props;
    const searchIndices = [
      { name: `Resource`, title: `Resource`, hitComp: `CardHit` },
    ]
    return (
      <Page>
        <Helmet>
          <title>{data.contentfulPage.metaTitle} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={location.href} />
          <meta name="description" content={data.contentfulPage.metaDescription} />
          <meta property="og:type" content="article" />
        </Helmet>
        <Hero title={data.contentfulPage.title} body="Recently read or watched. Learning resources related to design, psychology, accessibility, user research, computer science, artificial intelligence, and  machine learning" className="margin" />
        <Main padTop='large' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <Search collapse indices={searchIndices} />
        </Main>
      </Page>
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
      updatedAt(formatString: "Y-MM-DD")
    }
  }
`