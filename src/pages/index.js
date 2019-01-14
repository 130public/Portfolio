import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames/bind'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Hero from '../templates/hero'
import Link from '../components/link'
import Data from '../templates/data'
import styles from './index.module.scss'
import ResourceCard from "../components/card-resource";
import ResourceCardStyles from '../components/grid-resources.module.scss'

let cx = classNames.bind([styles,ResourceCardStyles]);

class Index extends React.Component {
  render() {

    const{data,location} = this.props;

    let classes = cx([
      styles.root, this.props.className,
    ]);

    return (
      <Container>
        <Helmet>
            <title>{data.contentfulPage.metaTitle} {data.site.siteMetadata.title}</title>
            <base target="_blank" href={location.href} />
            <meta name="description" content={data.contentfulPage.metaDescription} />
            <meta property="og:type" content="article" />
          </Helmet>
          <Hero title={data.contentfulPage.title} body={data.contentfulPage.content.body}>
            <p><span><strong>Obligatory Hashtags:</strong></span><br/>
            #design #development #designthinking #prototyping #accessibility</p>
            
          </Hero>
        <Main padTop='none' height='auto' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <h2>Recently read or found</h2>
          <ul className={ResourceCardStyles.grid}>
              {data.allContentfulResource.edges.slice(0, 3).map(({ node }) => {
                return (
                  <li key={node.slug} className={ResourceCardStyles.gridItem}>
                    <ResourceCard post={node} />
                  </li>
                )
              })}
          </ul>
          <Link type="button" to="/resources">More</Link>
        </Main>
        </Container>
    )
  }
}

export default Index

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "index" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      updatedAt(formatString: "Y-MM-D")
      content{
        body
        hashtags
      }
    }
    allContentfulResource {
      edges {
        node {
          title
          description
          source
          thumbnail{
            file{
              url
              fileName
            }
            title
            description
            
          }
          updatedAt
        }
      }
    }
  }
`