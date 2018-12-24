import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames/bind'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import Hero from '../templates/hero'
import Data from '../templates/data'
import styles from './index.module.scss'
import Resources from '../components/grid-resources'

let cx = classNames.bind(styles);

class Index extends React.Component {
  render() {

    const{data,location} = this.props;

    let className = cx([
      styles.root, this.props.className
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
            <p><span class="type-color--white"><strong>Obligatory Hashtags:</strong></span><br/>
            #design #development #designthinking #prototyping #accessibility</p>
          </Hero>
        <Main padTop='none' height='auto' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <h2>Recently read or found</h2>
          <Resources />
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
  }
`