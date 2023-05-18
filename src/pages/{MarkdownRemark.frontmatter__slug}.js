import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout/Layout"

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;