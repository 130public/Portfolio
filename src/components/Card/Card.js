import * as React from "react"
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Link = styled(GatsbyLink)`
  margin:0;
  padding:0;
  color:black;
  border:2px solid black;
  display:flex;
  flex-direction: column;
  overflow:hidden;
  height:100%;
  &:hover,&:focus{
    outline:none;
    cursor: pointer;
    border-color:var(--theme-color-primary);
    figure{
      border-color:var(--theme-color-primary);
      background:var(--theme-color-primary);
    }
    .title,.link{
      border-bottom:2px solid var(--theme-color-primary)
    }
    .title,.body{
      color:var(--theme-color-primary);
    }
    img{
      filter: grayscale(100%);
    }
  }
`
const Figure = styled.figure`
  position: relative;
  display:inline-block;
  margin:0;
  padding:56.25% 0 0 0;
  width:100%;
  overflow: hidden;
  border-bottom: 2px solid black;
  transition:all 500ms;
  img{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
    transition: all 500ms;
    filter: grayscale(100%);
    mix-blend-mode: screen;
    background:var(--theme-color-tertiary);
  }
  figcaption{
    position:absolute;
    display:none;
  }
`

const Header = styled.header`
  font-size:var(--font-lg);
  font-weight:700;
  padding: var(--gutter-sm) var(--gutter-sm) var(--gutter-xs);
  
`

const Body =  styled.section`
  padding: var(--gutter-xs) var(--gutter-sm) var(--gutter-sm);
`
const LinkText = styled.span`
  &:hover{
    text-decoration:underline;
  }
`

const CardComponent = (props) => {

    const {title, description, author, skills, source,thumbnail} = props.hit;

    return (
      <Link to={source} aria-label={'External resource to '+title}>
        <Figure>
          <img src={thumbnail.file.url} alt={thumbnail.title} />
        </Figure>
        <Header id={title}>
          <span className="title">{title}</span>
        </Header>
        <Body>
          <p className="body">{description}<br/>{author}</p>
          <pre className="body">{JSON.stringify(skills)}</pre>
          <LinkText className="link">External link <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} /></LinkText>
        </Body>
      </Link>
    );
  }
export default CardComponent;