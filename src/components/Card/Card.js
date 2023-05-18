import * as React from "react"
import styled from 'styled-components'
import GatsbyLink from 'gatsby-link'
import Truncate from '../Truncate/Truncate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Link = styled(GatsbyLink)`
  margin:0;
  padding:0;
  color:black;
  border:2px solid black;
  display: flex;
  flex-direction: column;
  justify-content:start;
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
  }
  &:visited{
    border-color:var(--theme-color-secondary);
    figure{
      border-color:var(--theme-color-secondary);
      background:var(--theme-color-secondary);
    }
    .title,.link{
      border-bottom:2px solid var(--theme-color-secondary)
    }
    .title,.body{
      color:var(--theme-color-secondary);
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
  background:var(--theme-color-text);
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
  }
  figcaption{
    position:absolute;
    display:none;
  }
`

const Header = styled.header`
  flex: 0 1 auto; 
  font-size:var(--font-sm);
  font-weight:700;
  padding: var(--gutter-sm) var(--gutter-sm) 0;
  
`
const Body =  styled.section`
  flex: 1 1 auto;
  padding: var(--gutter-xs) var(--gutter-sm) 0;
`
const Skills =  styled.p`
  margin:0;
  padding:0;
  font-size:var(--font-xs);
`
const Footer =  styled.footer`
  flex: 0 1 auto; 
  padding: var(--gutter-xs) var(--gutter-sm) var(--gutter-sm);
`
const LinkText = styled.span`
  &:hover{
    text-decoration:underline;
  }
`
const hasFigure = (thumbnail) => {
    return (
      <Figure>
        {/* <pre>{JSON.stringify(thumbnail,null,2)}</pre> */}
        <img src={thumbnail.fluid.src} title={thumbnail.title} alt={thumbnail.description}/>
      </Figure>
    )
}
const Skillslist = props => {
  const {data,count} = props;
  var skillString ="";

  if(data != undefined){
    const sliceCount = (count != undefined) ? count : data.length;
    var ending = ";"
    data.slice(0, sliceCount).map(( {name}, index ) => {

      if(index < sliceCount-1) ending = ", "
      if(index == data.length-1) ending = ""
      if(index == sliceCount-1) ending = "…"
      
      skillString += name+ending;
    })
  }
  return skillString;
}
const CardComponent = (props) => {
    const {title, description, author, skills, source, thumbnail, __position} = props.hit;
    return (
      <Link to={source} aria-label={'Item '+__position+' of '+props.hitsPerPage+', External resource to '+title}>
        {hasFigure(thumbnail)}
        <Header id={title}>
          <span className="title"><Truncate type="both" length="50">{title}</Truncate></span>
        </Header>
        <Body>
          {skills !== undefined &&
            <Skills>
              Topics: <Skillslist data={skills} count={3} />
            </Skills>
          }
        </Body>
        <Footer>
          <LinkText className="link">External link <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} /></LinkText>
        </Footer>
      </Link>
    );
  }
export default CardComponent;