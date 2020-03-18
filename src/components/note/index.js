import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../page'
import Hero from '../hero'
import Main from '../main'
import Card from '../card'
import Markdown from '../markdown';
import styles from './note.module.scss';

class NoteTemplate extends React.Component {
  render() {
    
    const{data,location} = this.props;

    return (
      <Page>
        <Helmet>
          <title>{data.contentfulNote.title} {data.site.siteMetadata.title}</title>
          <meta name="robots" content="noindex" />
          <base target="_blank" href={data.site.siteMetadata.url} />
        </Helmet>
        <Hero title={data.contentfulNote.title} className="none" />
        <Main padTop='large' style="default" offset={true} updatedAt={data.contentfulNote.updatedAt}>
          <Markdown value={data.contentfulNote.note.note} />
          {data.contentfulNote.resources !== null &&
            <div>
              <h2>Notes and excerpts from:</h2>
              <Card hit={data.contentfulNote.resources[0]} className={styles.simpleCard} />
            </div>
          }
      </Main>
    </Page>
    )
  }
}

export default NoteTemplate

export const NotePageQuery = graphql`
  query NoteBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        url
      }
    }
    contentfulNote(slug: { eq: $slug }) {
      id
      contentful_id
      title
      slug
      note {
        note
      }
      resources{
        ... on ContentfulResource{
          id 
          title
          description
          source
        }
      }
      updatedAt(formatString: "Y-MM-DD")
      createdAt(formatString: "Y-MM-DD")
    }
  }
`