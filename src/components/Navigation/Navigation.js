import * as React from "react"
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link'

// styles
const Navigation = styled.nav`
  position:relative;
  background:none;
  @media screen and (max-width:var(--screen-md)){
    margin-top:0.5rem;
    margin-left:-1rem;
    padding-left:2px;
    width: calc( 100vw );
    &:before{
      position:absolute;
      top:0;
      bottom:0;
      left:-1px;
      width:1px;
      box-shadow: 0 0 10px 5px white;
      content:" ";
    }
    &:after{
      position:absolute;
      top:0;
      bottom:0;
      right:-1px;
      width:1px;
      box-shadow: 0 0 10px 5px white;
      content:" ";
    }
  }
`;
const Frame = styled.div`
  @media screen and (max-width:var(--screen-md)){
    .frame{
      padding-left:1rem;
      width: calc( 100vw );
      overflow-x: scroll;
    }
  }
`
const List = styled.ul`
  display: flex;
  justify-content: left;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size:1rem;
  line-height:1rem;
  height:1.3rem;
  @media screen and (max-width:var(--screen-md)){
    width:1000px;
  }
`
const Item = styled.li`
  display: inline-flex;
  align-items: left;
  margin: 0 1rem 0 0;
`
const Link = styled(GatsbyLink)`
  color: var(--text-color-primary);
  box-shadow:none;
  text-decoration: none;
  font-family:var(--theme-font-secondary);
  font-weight:700;
  text-transform:uppercase;
  &:hover,&:focus{
    outline: none;
    color: var(--link-primary);
    box-shadow: inset 0 -0.125em 0 0 var(--link-primary);
    svg{
      color:var(--link-primary);
    }
  }
  svg{
    @extend .icon;
  }
`;
const NavigationComponent = (props) => {
  return (
    <Navigation role="navigation" {...props}>
      <Frame>
        <List>
          <Item>
            <Link to="/resume/">Resume</Link>
          </Item>
          <Item>
            <Link to="/projects/">Projects</Link>
          </Item>
          <Item>
            <Link to="/resources/">Resources</Link>
          </Item>
          <Item>
            <Link to="/the-end/">Colophon</Link>
          </Item>
        </List>
      </Frame>
    </Navigation>
  )
}

export default NavigationComponent