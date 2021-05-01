import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"

const Main = styled.main`
  padding-left:var(--gutter-md);
  padding-right:var(--gutter-md);
`

// markup
const ResumePage = (props) => {
  
  return (
    <Layout location={props.location}>
      <Main>
        {JSON.stringify(props)}
        <Hero className="default" title="Resume" body=""/>
      </Main>
    </Layout>
  )
}

export default ResumePage