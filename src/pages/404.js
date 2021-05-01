import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"

const Main = styled.main`
  padding-left:var(--gutter-md);
  padding-right:var(--gutter-md);
`

// markup
const NotFoundPage = (props) => {
  
  return (
    <Layout location={props.location}>
      <Main>
        <Hero className="default" title="404" body="😔 Sorry. we couldn’t find what you were looking for."/>
      </Main>
    </Layout>
  )
}

export default NotFoundPage
