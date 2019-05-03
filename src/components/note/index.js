import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../page'
import Hero from '../hero'
import Main from '../main'
import Markdown from '../markdown';

class NoteTemplate extends React.Component {
  componentDidMount(){
    console.log(this.props.data.contentfulNote);
  }
  render() {
    
    const{data,location} = this.props;

    return (
      <Page>
        <Helmet>
          <title>{data.contentfulNote.title} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={location.href} />
        </Helmet>
        <Hero title={data.contentfulNote.title} className="none" />
        <Main padTop='large' style="default" offset={true} updatedAt={data.contentfulNote.updatedAt}>
          Notes and excerpts from:
          <pre>{JSON.stringify(data.contentfulNote.resources)}</pre>
          <hr/>
          <Markdown value={data.contentfulNote.note.note} />
          {/* <pre>{JSON.stringify(data.contentfulNote,null, 2)}</pre> */}
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