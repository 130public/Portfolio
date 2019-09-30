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
  constructor(props) {
    super(props);

    
  }
  componentDidMount(prevProps){
    //console.log(this.props.data.contentfulPages.skills);
    {this.props.data.contentfulPage.resources.map((node) => {
      console.log(node.id);
    })}
  }
  render() {

    const{data,location} = this.props;

    let classes = cx([
      indexStyles.root, this.props.className,
    ]);
    

    return (
      <Page>
        <Helmet>
          <title>{data.contentfulPage.metaTitle} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={data.site.siteMetadata.url} />
          <meta name="description" content={data.contentfulPage.metaDescription} />
          <meta property="og:type" content="article" />
        </Helmet>
        <Hero style="fun" title={data.contentfulPage.title}>
          <p className={indexStyles.hashtags}>
            <b>Obligitory hashtags: </b><br/>
            {data.contentfulPage.skills.map((node) => {
              return <span key={node.id} className={indexStyles.hashtag}>#{node.name}</span>;
            })}
          </p>
          <p><i>Portfolio available by request.</i></p>
          <SocialProfiles/>
        </Hero>
        <Main padTop='none' height='auto' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <p className={indexStyles.bio}><Markdown value={data.contentfulPage.body.body} /></p>
          <h2>Recently read, watched, or listened</h2>
          <div className={gridStyles.hits}>
            <ul>
                {data.contentfulPage.resources.map(( node ) => {
                  return (
                    <li key={node.id}>
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
        url
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
          id
          name
        }
      }
      resources {
        ... on ContentfulResource {
          id 
          title
          description
          author
          source
          thumbnail{
            file{
              url
              fileName
            }
            fluid(quality: 85, maxWidth: 320) {
              src
            }
            title
            description
          }
          skills {
            ... on ContentfulSkill {
              name
            }
          }
          updatedAt(formatString: "Y-MM-DD")
          createdAt(formatString: "Y-MM-DD")
        }
      }
    }
  }
`