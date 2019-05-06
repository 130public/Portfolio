import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../page'
import Hero from '../hero'
import Main from '../main'

class ProjectTemplate extends React.Component {
  render() {
    
    const{data,location} = this.props;

    return (
      <Page>
        <Helmet>
          <title>{data.contentfulProject.title} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={data.site.siteMetadata.url} />
          <meta name="robots" content="noindex" />
        </Helmet>
        <Hero title={data.contentfulProject.title} className="none" />
        <Main padTop='large' style="alt" offset={true} updatedAt={data.contentfulProject.updatedAt}>
          <pre>{JSON.stringify(this.props,null, 2)}</pre>
      </Main>
    </Page>
    )
  }
}

export default ProjectTemplate

export const projectPageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulProject(slug: { eq: $slug }) {
      title
      description{
        description
      }
      body{
        body
      }
      updatedAt(formatString: "Y-MM-D")
    }
  }
`