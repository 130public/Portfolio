import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
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
  @font-face{
  font-family:socicon;
  src:url(/assets/fonts/socicon/socicon-webfont.eot);
  src:url(/assets/fonts/socicon/socicon-webfont.eot?#iefix) format("embedded-opentype"),url(/assets/fonts/socicon/socicon-webfont.woff) format("woff"),url(/assets/fonts/socicon/socicon-webfont.ttf) format("truetype"),url(/assets/fonts/socicon/socicon-webfont.svg#scrawlregular) format("svg");
  font-weight:400;
  font-style:normal}
`;
export const GlobalVars = createGlobalStyle`
  :root {
    --theme-color-primary:#227bf9;
    --theme-color-secondary:#6219ee;
    --theme-color-tertiary:#666666;
    --theme-color-text:#212121;
    --theme-fg-color:#212121;
    --theme-bg-color:#f9f9f9;
    --theme-font-primary:"GT Pressura", -apple-system, Arial, sans-serif;
    --theme-font-secondary:"GT Pressura Mono", 'Courier New', Courier, monospace;
    
    --screen-md: 400px;
    --screen-lg: 521px;

    --base-size:20px;
    --font-xs: 0.875rem;
    --font-sm: 1.0rem;
    --font-md: 1.15rem;
    --font-lg: 1.5rem;
    --font-xl: 2.15rem;

    --layout-margin:150px;
    --gutter-xs:0.5rem;
    --gutter-sm:1rem;
    --gutter-md:2rem;
    --gutter-lg:4rem;
    --gutter-xl:6rem;

    --link-primary: var(--theme-color-primary);
    --text-primary: #212121;
    --text-secondary: #f1f1f1;
  }
`;
export const GlobalStyles = createGlobalStyle`
  html,body{margin:0;padding:0;font-size:20px;line-height: 1.5;}
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background:var(--theme-bg-color);
  }
  @media screen and (min-width: --screen-lg){
    .app,body{
      /* font-size: var(--font-sm)rem; */
    }
  }
  h1{
    font-size:var(--font-xl);
  }
  h2{
    font-size:var(--font-lg);
  }
  h3{
    font-size:var(--font-md);
  }
  p{
    font-size:var(--font-sm);
  }
  a{
    color:$blue;
    text-decoration: none;
  }
  p>a{
    box-shadow: inset 0 -0.0625em 0 0 var(--text-primary);
  }
  .inverse p>a,
  p>a.invert{
    color:var(--text-secondary);
    box-shadow: inset 0 -0.0625em 0 0 var(--text-secondary);
  }
  pre{
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .button{
    display: inline-block;
    padding:4px;
    color:white;
    background:$blue;
  }
  .u-gutters{
    padding-left: $universal-gutter;
    padding-right: $universal-gutter;
  }
  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
`;