import * as React from "react"
import styled from 'styled-components'
import queryString from "query-string"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Resources from "../components/Resources/Resources";

const Main = styled.main`
  padding-left:var(--gutter-md);
  padding-right:var(--gutter-md);
`

// markup
const SearchPage = (props) => {
  const queryObj = queryString.parse(props.location.search);
  return (
    <Layout location={props.location}>
      <Main>
        <Hero className="fun" title="Search" body="">
          <p>Results for <u>{queryObj.query}</u></p>
        </Hero>
        <Resources query={queryObj.query} hitsPerPage={12} colWidth="20%" />
      </Main>
    </Layout>
  )
}

export default SearchPage