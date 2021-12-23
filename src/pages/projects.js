import * as React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Main from "../components/Main/Main"
import Hero from "../components/Hero/Hero"
import Grid from "../components/Grid/Grid"
import Card from "../components/Card/Card"

const Project = (props) => {

  console.log(props);
  const {frontmatter,hitsPerPage} = props;
  const {slug,title,description,cover} = frontmatter;
  const thumbnail = {
    title:title,
    file:{
      url:cover
    }
  }
  const projectData = {
    title:title,
    description:description,
    __position:1,
    author:"project",
    source:"/projects/"+slug,
    thumbnail: thumbnail,
  }

  return (
    <Card hit={projectData} hitsPerPage={hitsPerPage} />
  )
}

// markup
const ProjectPage = (props) => {
  const {data} = props;
  const hitsPerPage = Object.keys(data.allMarkdownRemark.edges).length;
  const items = data.allMarkdownRemark.edges.map(({ node }, index) => (
    <Project key={index} {...node} hitsPerPage={hitsPerPage} />
  ))
  return (
    <Layout location={props.location}>
      <Hero className="default" title="Projects" body=""/>
      <Main>
        <Grid items={items} hitsPerPage={Object.keys(items).length} colWidth="20%" />
      </Main>
    </Layout>
  )
}

export default ProjectPage

export const projectsQuery = graphql`
  {
    allMarkdownRemark(
      limit: 12
      filter: {frontmatter: {type: {in: ["project"]}}}
    ) {
      edges {
        node {
          frontmatter {
            type
            slug
            title
            description
            role
            cover
          }
        }
      }
    }
  }
`