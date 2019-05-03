
import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/page'
import Main from '../components/main'
import Link from '../components/link'

class NotesIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log(this.props.data);
  }

  render() {
    const{data} = this.props;
    return (
      <Page>
        <Main padTop='large' style="white" offset={true} updatedAt="NULL">
          <ul>
              {data.allContentfulNote.edges.map(( {node} ) => {
                return (
                  <li key={node.contentful_id}>
                    <p>{node.title}<br/>Last updated: {node.updatedAt}</p>
                    <Link to={`/notes/${node.slug}`}>Read More</Link>
                  </li>
                )
              })}
          </ul>
        </Main>
      </Page>
    )
  }
}
export default NotesIndex

export const notesPageQuery = graphql`
  query notesPageQuery {
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