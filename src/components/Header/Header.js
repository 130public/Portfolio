import * as React from "react"
import styled from 'styled-components';
import Brand from '../Brand/Brand'
import Navigation from '../Navigation/Navigation'

// styles
const Header = styled.header`
  position: relative;
  padding-top:var(--gutter-md);
  padding-right:var(--gutter-md);
  padding-bottom:calc(var(--gutter-md) * 0.8);
  padding-left:var(--gutter-md);
  @extend .u-gutters;
  @extend .u-spacers--inside;
  background:white;
  display:flex;
  flex-flow:row wrap;
  z-index:1;
  
`;
const HeaderComponent = (props) => {
  return (
    <Header {...props}>
      <Brand to="/" left="ONE THIRTY" right="Public"/>
      <Navigation />
    </Header>
  )
}

export default HeaderComponent