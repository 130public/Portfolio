import * as React from "react"
import styled from 'styled-components';
import {GlobalFonts,GlobalVars,GlobalStyles} from '../GlobalStyles/GlobalStyles'
import SEO from '../Seo/Seo'
import SkipToContent from '../SkipToContent/SkipToContent'
import Header from '../Header/Header'

// styles
const Layout = styled.div`
  color:var(--text-primary);
  font-family:"GT Pressura", -apple-system, Arial, sans-serif;
`

const LayoutComponent = ({children}) => {
  return (
    <>
      <GlobalFonts />
      <GlobalVars />
      <GlobalStyles />
      <SEO
        title="Layout"
        description=""
        image=""
        pathname=""
        article=""
      />
      <Layout>
        <SkipToContent href="#main"/>
        <Header/>
        <main id="main">
          {children}
        </main>
      </Layout>
    </>
  )
}

export default LayoutComponent