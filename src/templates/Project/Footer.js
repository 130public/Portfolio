import React from "react"
import styled from 'styled-components'
import Brand from '../../components/Brand/Brand'

const Footer = styled.footer`
  margin: var(--gutter-lg) var(--gutter-xl);
  padding: var(--gutter-sm) 0;
  border-top:2px solid var(--text-primary);
`

const FooterComponent = (props) => {
  return(
    <Footer>
      <Brand left="THE" right="END"/>
      {props.children}
    </Footer>
  )
}
export default FooterComponent;