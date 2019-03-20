import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames/bind'
import Helmet from 'react-helmet'
import Page from '../components/page'
import Main from '../components/main'
import Hero from '../components/hero'
import Link from '../components/link'
import Card from "../components/card";
import SocialProfiles from "../components/social-profiles";
//
import gridStyles from '../components/search/search.module.scss'
import indexStyles from './index.module.scss'

let cx = classNames.bind([indexStyles,gridStyles]);

class Index extends React.Component {
  render() {

    const{data,location} = this.props;

    let classes = cx([
      indexStyles.root, this.props.className,
    ]);

    return (
      <Page>
        <Helmet>
          <title>{data.contentfulPage.metaTitle} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={location.href} />
          <meta name="description" content={data.contentfulPage.metaDescription} />
          <meta property="og:type" content="article" />
        </Helmet>
        <Hero style="fun" title={data.contentfulPage.title} body={data.contentfulPage.content.body}>
          <p><span><strong>Obligatory Hashtags:</strong></span><br/>
          #design #development #designthinking #prototyping #accessibility</p>
          <SocialProfiles/>
        </Hero>
        <Main padTop='none' height='auto' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <h2>Recently read or found</h2>
          <div className={gridStyles.hits}>
            <ul>
                {data.allContentfulResource.edges.slice(0, 3).map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <Card hit={node} />
                    </li>
                  )
                })}
            </ul>
          </div>
          <Link type="button" to="/resources">More</Link>
        </Main>
        </Page>
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
        hashtags
      }
      body{
        body
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