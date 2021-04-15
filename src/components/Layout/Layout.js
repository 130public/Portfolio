import * as React from "react"
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles/GlobalStyles'

// styles
const Layout = styled.div`
  color: #232129;
  padding: 96;
  background:green;
  font-family: -apple-system, Roboto, sans-serif, serif;
`

const LayoutComponent = ({children}) => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        {children}
      </Layout>
    </>
  )
}

export default LayoutComponent