import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../../components/Layout/Layout"
import Hero from "../../components/Hero/Hero"
import ProjectFooter from "./Footer"

const Main = styled.main`
  padding-left:var(--gutter-md);
  padding-right:var(--gutter-md);
`

const projectTemplate = (props) => {
  const { markdownRemark } = props.data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Main>
        <Hero className="blank" 
          title={frontmatter.title} 
          body={frontmatter.description}
        >
          <div>{frontmatter.role}</div>
        </Hero>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <ProjectFooter>{frontmatter.date}</ProjectFooter>
      </Main>
    </Layout>
  )
}
export default projectTemplate;

export const projectQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        role
      }
    }
  }
`