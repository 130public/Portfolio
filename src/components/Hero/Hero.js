import * as React from "react"
import styled from 'styled-components';

const Hero = styled.div.attrs((props) => ({}))`
  position:relative;
  margin-top: var(--gutter-md);
  margin-bottom: var(--gutter-sm);
  padding-top:var(--gutter-lg);
  padding-right:var(--gutter-lg);
  padding-bottom:var(--gutter-lg);
  padding-left:var(--gutter-lg);
  &.default{
    color:white;
    background:var(--text-primary);
    a{color:var(--text-secondary); text-decoration: underline;}
  }
  &.fun{
      color:white;
      background-image:linear-gradient(145deg, var(--theme-color-primary), var(--theme-color-secondary));
  }
  &.blank{
      color:var(--text-primary);
      border:2px solid white;
  }
  h1{
    font-size:3rem;
    text-transform:uppercase;
  }
  p{
    margin:0;
    font-size:1.5rem;
  }
`


const HeroComponents = (props) => {
  return (
    <Hero className={props.className}>
      <h1 className="headline">{props.title}</h1>
      <div className="body">
        <p>{props.body}</p>
        {props.children}
      </div>
    </Hero>
  )
}
export default HeroComponents