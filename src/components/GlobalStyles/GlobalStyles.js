import * as React from "react"
import styled, { createGlobalStyle } from 'styled-components';

const GlobalDefaultStyles = createGlobalStyle`
  @font-face{
  font-family:GT Pressura;
  font-weight:300;
  src:url(/assets/fonts/gt-pressura/light/gt-pressura-light.eot?) format("eot"),url(/assets/fonts/gt-pressura/light/gt-pressura-light.woff) format("woff"),url(/assets/fonts/gt-pressura/light/gt-pressura-light.ttf) format("truetype")}
  @font-face{
    font-family:GT Pressura;
    font-weight:400;
    src:url(/assets/fonts/gt-pressura/regular/gt-pressura-regular.eot?) format("eot"),url(/assets/fonts/gt-pressura/regular/gt-pressura-regular.woff) format("woff"),url(/assets/fonts/gt-pressura/regular/gt-pressura-regular.ttf) format("truetype")}
  @font-face{
    font-family:GT Pressura;
    font-weight:700;
    src:url(/assets/fonts/gt-pressura/bold/gt-pressura-bold.eot?) format("eot"),url(/assets/fonts/gt-pressura/bold/gt-pressura-bold.woff) format("woff"),url(/assets/fonts/gt-pressura/bold/gt-pressura-bold.ttf) format("truetype")}
  .the-end-module--font--gt-pressura{
  font-family:GT Pressura,Tahoma,Arial,Helvetica,sans-serif}
  @font-face{
  font-family:GT Pressura Mono;
  font-weight:300;
  src:url(/assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.eot?) format("eot"),url(/assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.woff) format("woff"),url(/assets/fonts/gt-pressura-mono/light/gt-pressura-mono-light.ttf) format("truetype")}
  @font-face{
  font-family:GT Pressura Mono;
  font-weight:400;
  src:url(/assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.eot?) format("eot"),url(/assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.woff) format("woff"),url(/assets/fonts/gt-pressura-mono/regular/gt-pressura-mono-regular.ttf) format("truetype")}
  @font-face{
  font-family:GT Pressura Mono;
  font-weight:700;
  src:url(/assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.eot?) format("eot"),url(/assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.woff) format("woff"),url(/assets/fonts/gt-pressura-mono/bold/gt-pressura-mono-bold.ttf) format("truetype")}
  .the-end-module--font--gt-pressura-mono{
  font-family:GT Pressura Mono,Courier,monospace}
  .the-end-module--font--weight-300{
  font-weight:300}
  .the-end-module--font--weight-400{
  font-weight:400}
  .the-end-module--font--weight-700{
  font-weight:700}
  @font-face{
  font-family:socicon;
  src:url(/assets/fonts/socicon/socicon-webfont.eot);
  src:url(/assets/fonts/socicon/socicon-webfont.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/socicon/socicon-webfont.woff) format("woff"),url(/assets/fonts/socicon/socicon-webfont.ttf) format("truetype"),url(/assets/fonts/socicon/socicon-webfont.svg#scrawlregular) format("svg");
  font-weight:400;
  font-style:normal}
  body {
    font-size: 0.625rem;
    line-height: 1.65;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  pre{
    font-family: "GT Pressura Mono", 'Courier New', Courier, monospace;
  }
  /*
  BASE TYPE STYLES
  */
  .typography {
    font-family: "GT Pressura", Tahoma, Arial, Helvetica, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  .app,body{
    font-size: 14px;
    line-height: 1.5;
  }
  @media screen and (min-width: 521px){
    .app,body{
      font-size: 16px;
    }
  }

  .icon{
    position: relative;
      margin-left:5px;
      top:-7px;
      color:#999;
      width:8px !important;
  }

  /*
  Headings
  */
  .type--headline1  {
    font-size: 6rem;
    line-height: 6rem;
    letter-spacing: -.01562em;
  }
  .type--headline2 {
    font-size: 3.75rem;
    line-height: 3.75rem;
    letter-spacing: -.00833em;
  }
  .type--headline3 {
    font-size: 3rem;
    line-height: 3.125rem;
    letter-spacing: normal;
  }
  .type--headline4 {
    font-size: 2.125rem;
    line-height: 2.5rem;
    letter-spacing: .00735em;
  }
  .type--headline5 {
    font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: normal;
  }
  .type--headline6 {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: .0125em;
  }
  .type--subtitle1 {
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 700;
    letter-spacing: .00937em;
  }
  .type--subtitle2 {
    font-size: .875rem;
    line-height: 1.375rem;
    font-weight: 700;
    letter-spacing: .00714em;
  }
  /*
  Body
  */
  .type--body1{
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: .03125em;
  }
  .type--body2{
    font-size: .875rem;
    letter-spacing: .01786em;
  }
  .type-body--size-1,.type-body--size-2{
    font-weight: 400;
  }
  /*
  Styles
  */
  .type--style-uppercase{
    text-transform: uppercase;
  }
  .type--align-center{
    text-align: center;
  }
  /*
  Context
  */
  .p-after--h3{

  }
  a{
    color:$blue;
    text-decoration: none;
  }
  p>a{
    box-shadow: inset 0 -0.0625em 0 0 black;
  }
  .button{
    display: inline-block;
    padding:4px;
    color:white;
    background:$blue;
  }
`;
export default GlobalDefaultStyles;