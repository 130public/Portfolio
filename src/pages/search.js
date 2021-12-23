import * as React from "react"
import styled from 'styled-components'
import queryString from "query-string"
import Layout from "../components/Layout/Layout"
import Main from "../components/Main/Main"
import Hero from "../components/Hero/Hero"
import Resources from "../components/Resources/Resources";

// markup
const SearchPage = (props) => {
  const queryObj = queryString.parse(props.location.search);
  return (
    <Layout location={props.location}>
      <Hero className="fun" title="Search" body="">
        <p>Results for <u>{queryObj.query}</u></p>
      </Hero>
      <Main>
        <Resources query={queryObj.query} hitsPerPage={12} colWidth="20%" />
      </Main>
    </Layout>
  )
}

export default SearchPage