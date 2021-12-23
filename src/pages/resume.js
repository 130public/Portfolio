import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Main from "../components/Main/Main"
import Hero from "../components/Hero/Hero"

// markup
const ResumePage = (props) => {
  
  return (
    <Layout location={props.location}>
      <Hero className="default" title="Resume" body=""/>
      <Main>
        {JSON.stringify(props)}
      </Main>
    </Layout>
  )
}

export default ResumePage