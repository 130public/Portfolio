import * as React from "react"
import styled from 'styled-components';
import Markdown from '../Markdown/Markdown'

const Hero = styled.div.attrs((props) => ({}))`
  position:relative;
  margin-bottom: var(--gutter-sm);
  padding-top:var(--gutter-lg);
  padding-right:var(--layout-margin);
  padding-bottom:var(--gutter-lg);
  padding-left:var(--layout-margin);
  &.default{
    color:white;
    background:var(--text-primary);
    a{color:var(--text-secondary); text-decoration: underline;}
  }
  &.invert{
    color:var(--text-primary);
    a{color:var(--text-primary); text-decoration: underline;}
    padding-right:var(--gutter-md);
    padding-left:var(--gutter-md);
  }
  &.fun{
      color:white;
      background-image:linear-gradient(145deg, var(--theme-color-primary), var(--theme-color-secondary));
  }
  &.blank{
      color:var(--text-primary);
  }
  h1{}
  p{
    margin:0;
    font-size:var(--font-md);
  }
`
const CoverStyle = styled.figure`
  position:relative;
  margin:var(--gutter-md) 0 0;
  padding:0;
  img{
    position: relative;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`

const Cover = (props) => {
  const {image} = props;
  console.log('cover='+ typeof(image));
  if(typeof image === 'string') {
    return (
      <CoverStyle><img src={image} /></CoverStyle>
    );
  } else {
    return '';
  } 
  
}



const HeroComponent = (props) => {
  return (
    <Hero className={props.className}>
      <h1 className="headline">{props.title}</h1>
      <div className="body">
        <p><Markdown value={props.body} /></p>
        {props.children}
      </div>
      <Cover image={props.cover} />
    </Hero>
  )
}
export default HeroComponent