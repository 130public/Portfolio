import { faGlassMartiniAlt } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import styled from 'styled-components'


const Main = styled.main`
  padding-left:var(--layout-margin);
  padding-right:var(--layout-margin);
`

const MainComponent = (props) => {
  const {children} = props;

  return (

    <Main {...props}>
      {children}
    </Main>

  )

}
export default MainComponent