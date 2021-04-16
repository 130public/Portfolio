import * as React from "react"
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// library.add(faExternalLinkAlt);

const Link = styled(GatsbyLink)`
  margin:0;
  padding:0;
  color:black;
  border:2px solid black;
  display:block;
  figure{
    margin:0;
    padding:0;
  }
  &:hover,&:focus{
    outline:none;
    cursor: pointer;
    border-color:var(--theme-color-primary);
  }
`

const CardComponent = (props) => {
    
    return (
      <Link {...props}>
        I am card {props.name}
      </Link>
    );
  }
export default CardComponent;