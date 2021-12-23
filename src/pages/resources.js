import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Main from "../components/Main/Main"
import Hero from "../components/Hero/Hero"
import Resources from "../components/Resources/Resources";

// markup
const ResourcesPage = (props) => {
  return (
    <Layout location={props.location}>
      <Hero className="fun" title="Resources"/>
      <Main>
        <h2>Recently read, watched, or listened</h2>
        <Resources hitsPerPage={1000} colWidth="20%" />
      </Main>
    </Layout>
  )
}

export default ResourcesPage