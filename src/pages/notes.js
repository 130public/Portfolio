
import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Page from '../components/page'
import Hero from '../components/hero'
import Main from '../components/main'
import Grid from '../components/grid'
import Card from "../components/card/note";
import styles from "../components/search/search.module.scss";

class NotesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const{data} = this.props;
    
    return (
      <Page>
        <SEO 
          title={data.contentfulPage.metaTitle} 
          description={data.contentfulPage.metaDescription}
        />
        <Hero title={data.contentfulPage.title} body={data.contentfulPage.body.body} className="margin" />
        <Main padTop='large' style="white" offset={true} updatedAt={data.allContentfulNote.edges[0].node.updatedAt}>
          <Grid className={styles.hits}>
              <ul>
              {data.allContentfulNote.edges.map(( {node} ) => {
                return (
                  <li key={node.contentful_id}>
                    <Card hit={node} />
                  </li>
                )
              })}
              </ul>
          </Grid>
        </Main>
      </Page>
    )
  }
}
export default NotesIndex

export const notesPageQuery = graphql`
  query notesPageQuery {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulPage(slug: { eq: "notes" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      body{
        body
      }
      updatedAt(formatString: "Y-MM-DD")
    }
    allContentfulNote {
      edges {
        node{
          id
          contentful_id
          title
          slug
          note {
            note
          }
          updatedAt(formatString: "Y-MM-DD")
          createdAt(formatString: "Y-MM-DD")
        }
      }
    }
  }
`