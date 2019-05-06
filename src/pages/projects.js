import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../components/page'
import Hero from '../components/hero'
import Main from '../components/main'
import Search from '../components/search';

class ProjectsIndex extends React.Component {
  render() {
    const{data,location} = this.props;
    const searchIndices = [
      { name: `Project`, title: `Project`, hitComp: `CardHit` },
    ]

    return (
      <Page>
        <Helmet>
          <title>{data.contentfulPage.metaTitle} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={data.site.siteMetadata.url} />
          <meta name="robots" content="noindex" />
          <meta name="description" content={data.contentfulPage.metaDescription} />
          <meta property="og:type" content="article" />
        </Helmet>
        <Hero title={data.contentfulPage.title} body="" className="margin" />
        <Main padTop='large' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <Search collapse indices={searchIndices} />
        </Main>
      </Page>
    )
  }
}

export default ProjectsIndex

export const projectsPageQuery = graphql`
  query projectsPageQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulPage(slug: { eq: "projects" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-DD")
    }
  }
`