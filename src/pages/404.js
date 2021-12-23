import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Main from "../components/Main/Main"
import Hero from "../components/Hero/Hero"

// markup
const NotFoundPage = (props) => {
  
  return (
    <Layout location={props.location}>
      <Hero className="default" title="404" body="😔 Sorry. we couldn’t find what you were looking for."/>
      <Main>
        Add search and page list
      </Main>
    </Layout>
  )
}

export default NotFoundPage
