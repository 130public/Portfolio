import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Main from "../components/Main/Main"
import Seo from "../components/Seo/Seo"
import Hero from "../components/Hero/Hero"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

// markup
const ColophonPage = (props) => {
  const {data} = props;
  return (
    <Layout location={props.location}>
      <Seo
          title="Colophon"
        />
        <Hero title={data.contentfulPage.title} title={data.contentfulPage.title} body={data.contentfulPage.content.body} style="blank" />
      <Main>
        <table>
          <thead>
          <tr>
              <th>path/file</th>
              <th>size</th>
          </tr>
          </thead>
          <tbody>
          {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
              <td><a href={"https://github.com/jasonjgeiger/portfolio/tree/master/src/"+node.relativePath}>{node.relativePath} <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} /></a></td>
              <td>{node.prettySize}</td>
              {/* <td>{node.extension}</td> */}
              <pre>{JSON.stringify(node,null,2)}</pre>
              </tr>
              
          ))}
          </tbody>
      </table>
      </Main>
    </Layout>
  )
}

export default ColophonPage

export const filesPageQuery = graphql`
  query filesPageQuery {
    site {
        siteMetadata {
            title
            url
        }
    }
    contentfulPage(slug: { eq: "colophon" }) {
        title,
        slug,
        metaTitle,
        metaDescription,
        content {
            body
        },
        updatedAt(formatString: "Y-MM-DD")
    }
    allFile(
      filter: {extension: {nin: ["pdf", "gif", "png", "jpg"]}}
    ) {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`