import * as React from "react"
import styled from 'styled-components';
import {GlobalFonts,GlobalVars,GlobalStyles} from '../GlobalStyles/GlobalStyles'
import Seo from '../Seo/Seo'
import SkipToContent from '../SkipToContent/SkipToContent'
import Header from '../Header/Header'

// styles
const Layout = styled.div`
  color:var(--text-primary);
  font-family:"GT Pressura", -apple-system, Arial, sans-serif;
`
const Content = styled.div`

`

const LayoutComponent = (props) => {
  return (
    <>
      <GlobalFonts />
      <GlobalVars />
      <GlobalStyles />
      <Seo
        title="Layout"
        description=""
        image=""
        pathname=""
        article=""
      />
      <Layout location={props.location}>
        <SkipToContent href="#main"/>
        <Header/>
        <Content id="main">
          {props.children}
        </Content>
      </Layout>
    </>
  )
}

export default LayoutComponent