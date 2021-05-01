import * as React from "react"
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'

const Hash = styled(GatsbyLink)`
  display:inline-block;
  padding-right:var(--gutter-xs);
  color: var(--text-secondary);
  text-decoration:none;
  &:hover{
    span{

    }
  }
`;

const HashComponent = (props) => {
  const url = "/search?query="+encodeURI(props.string);
  return (
    <Hash aria-label={"Search "+props.string} to={url}>
      <span aria-hidden="true">#</span><span>{props.string}</span>
    </Hash>
  )
}

export default HashComponent