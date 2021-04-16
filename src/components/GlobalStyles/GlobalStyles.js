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
    --theme-color-text:#212121;
    --theme-bg-color:#f1f1f1;
    --theme-font-primary:"GT Pressura", -apple-system, Arial, sans-serif;
    --theme-font-secondary:"GT Pressura Mono", 'Courier New', Courier, monospace;
    
    --screen-md: 400px;
    --screen-lg: 521px;

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
  html,body{margin:0;padding:0;}
  body {
    font-size: 14px;
    line-height: 1.5;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  @media screen and (min-width: --screen-lg){
    .app,body{
      font-size: 16px;
    }
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
  .u-gutters{
    padding-left: $universal-gutter;
    padding-right: $universal-gutter;
  }
`;