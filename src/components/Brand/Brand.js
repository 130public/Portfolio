import * as React from "react"
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link'

// styles
const BrandLink = styled(GatsbyLink)`
  position: relative;
  margin-right:var(--gutter-sm);
  font-size:1rem;
  line-height: 1rem;
  font-family:var(--theme-font-secondary);
  font-weight:700;
  text-transform:uppercase;
  .left{
    color:white;
    border:2px solid black;
    background:black;
    margin-right:0.25rem;
    padding:0 0.25rem;
  }
  .space{
    font-size:0;
  }
  .right{
    padding:0 0.25rem;
    color:black;
    border:2px solid black;
    background:white;
  }
  &:hover .left{
    color:white;
    background:$blue;
    border-color:$blue;
  }
  &:hover .right{
    color:$blue;
    background:white;
    border-color:$blue;
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