import * as React from "react"
import styled from 'styled-components';

const TextLink = (props) => (
  <a {...props}>
    {props.children}
  </a>
);

const Skip = styled(TextLink)`
  position: relative;
  display:block;
  height:0;
  width:100%;
  padding:0 24px;
  color:var(--text-secondary);
  font-size:24px;
  font-weight: bold;
  background:var(--theme-color-primary);
  transition: all 100ms;
  overflow:hidden;
  &:focus {
    height: 80px;
    line-height: 80px;
    outline: none;
    text-decoration: underline;
  }
`
const SkipComponent = (props) => {
    return (
      <Skip {...props}>Skip to main content</Skip>
    )

}
export default SkipComponent