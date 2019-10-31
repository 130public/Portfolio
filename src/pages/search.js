import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Page from '../components/page'
import Hero from '../components/hero'
import Main from '../components/main'
import Search from '../components/search'

class SearchIndex extends React.Component {
  render() {
    const{data,location} = this.props;
    const searchIndices = [
      { name: `Resource`, title: `Resource`, hitComp: `Card` },
      { name: `Page`, title: `Page`, hitComp: `Card` },
      { name: `Project`, title: `Project`, hitComp: `Card` }
    ]

    return (
      <Page className="fun">
        <SEO 
          title={data.contentfulPage.metaTitle} 
          description={data.contentfulPage.metaDescription}
        />
        <Hero title={data.contentfulPage.title} title={data.contentfulPage.title} style="blank" />
        <Main padTop='large' height='full' style="fun" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <Search collapse indices={searchIndices}  />
        </Main>
      </Page>
    )
  }
}

export default SearchIndex

export const searchPageQuery = graphql`
  query searchPageQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulPage(slug: { eq: "search" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-D")
    }
  }
`