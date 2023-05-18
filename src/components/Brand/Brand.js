import * as React from "react"
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link'

// styles
const BrandLink = styled(GatsbyLink)`
  position: relative;
  margin-right:var(--gutter-sm);
  font-size:var(--font-xs);
  line-height: var(--font-xs);
  font-family:var(--theme-font-secondary);
  font-weight:700;
  text-transform:uppercase;
  transition: all ease-in-out .3s;
  *{
    transition: all ease-in-out .3s;
  }
  .left{
    color:var(--theme-bg-color);
    border:2px solid var(--theme-fg-color);
    background-color:var(--theme-fg-color);
    margin-right:0.25rem;
    padding:0 0.25rem;
  }
  .space{
    font-size:0;
  }
  .right{
    padding:0 0.25rem;
    color:var(--theme-fg-color);
    border:2px solid var(--theme-fg-color);
    background:var(--theme-bg-color);
  }
  &:hover .left{
    color:var(--theme-bg-color);
    background:var(--theme-color-primary);
    border-color:var(--theme-color-primary);
  }
  &:hover .right{
    color:var(--theme-color-primary);
    background:var(--theme-bg-color);
    border-color:var(--theme-color-primary);
  }
`;
const BrandComponent = (props) => {
  const {to} = props;
  return (
    <BrandLink to={to}>
      <span className="left">{props.left}</span>
      <span className="space">&nbsp;</span>
      <span className="right">{props.right}</span>
    </BrandLink>
  )
}
export default BrandComponent