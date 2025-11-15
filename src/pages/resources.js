import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
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
        <SEO 
          title={data.contentfulPage.metaTitle} 
          description={data.contentfulPage.metaDescription}
        />
        <Hero title={data.contentfulPage.title} body={data.contentfulPage.body.body} className="margin" />
        <Main padTop='large' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <Search collapse indices={searchIndices} location={location} />
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
        url
      }
    }
    contentfulPage(slug: { eq: "resources" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      body{
        body
      }
      updatedAt(formatString: "Y-MM-DD")
    }
  }
`