import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Hero from '../templates/hero'
import Projects from '../components/grid-projects'

class ProjectsIndex extends React.Component {
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
        <Main padTop='large' height='full' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <div className="wrapper">
            <Projects />
          </div>
        </Main>
      </Container>
    )
  }
}

export default ProjectsIndex

export const projectsPageQuery = graphql`
  query projectsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "projects" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-D")
    }
  }
`