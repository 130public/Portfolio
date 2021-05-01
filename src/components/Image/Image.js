import * as React from "react"
import styled from 'styled-components';

// styles
const Image = styled.img`
  -webkit-filter: none;
  filter: none;
  mix-blend-mode: normal;
`;
const ImageGrayscale = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  mix-blend-mode: screen;
  transition: all 500ms;
`
const ImageComponent = (props) => {
  const Variant = (props.variant === 'grayscale') ? <ImageGrayscale {...props} /> : <Image {...props}/>;

  return Variant
}

export default ImageComponent