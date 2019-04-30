import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames/bind'
import Helmet from 'react-helmet'
import Page from '../components/page'
import Main from '../components/main'
import Hero from '../components/hero'
import Link from '../components/link'
import Card from "../components/card";
import Markdown from '../components/markdown';
import SocialProfiles from "../components/socialProfiles";
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
        <Hero style="fun" title={data.contentfulPage.title}>
          <p className={indexStyles.hashtags}>
            <b>Obligitory hashtags: </b><br/>
            {data.contentfulPage.skills.map(function({name},index){
              return <span key={index} className={indexStyles.hashtag}>#{name}</span>;
            })}
          </p>
          <p><i>Portfolio available by request.</i></p>
          <SocialProfiles/>
        </Hero>
        <Main padTop='none' height='auto' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <p className={indexStyles.bio}><Markdown value={data.contentfulPage.body.body} /></p>
          <h2>Recently read or watched</h2>
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
      updatedAt(formatString: "Y-MM-DD")
      body{
        body
      }
      skills {
        ... on ContentfulSkill {
          name
        }
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
          skills {
            ... on ContentfulSkill {
              name
            }
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`