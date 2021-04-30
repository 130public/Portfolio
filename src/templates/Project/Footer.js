import React from "react"
import styled from 'styled-components'

const Footer = styled.footer`
  border-top:2px solid var(--theme-primary);
`

const ProjectFooterComponent = (props) => {
  return(
    <Footer>{props.children}</Footer>
  )
}
export default ProjectFooterComponent;