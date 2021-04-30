import * as React from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

const List = styled.ul`
  margin:var(--gutter-md) 0 0;
  padding:0;
  li{
    list-style: none;
    display: inline;
    padding-right:24px;
    a{
      position: relative;
      color:var(--text-secondary);
      svg{
        transform: scale(1);
        position: relative;
        color:var(--text-secondary);
      }
      &:hover{
        svg{
          transition:all 250ms;
          transform: scale(1.1);
        }
      }
    }
  }
`

const SocialProfilesComponent = (props) => {
    return (
      <List>
        <li><a target="_blank" href="https://www.linkedin.com/in/jasonjgeiger/" >
          <FontAwesomeIcon icon={faLinkedin} size="2x" aria-hidden="true" title="LinkedIn profile" />
          <span className="sr-only">LinkedIn profile</span>
        </a></li>
        <li><a target="_blank" href="https://github.com/jasonjgeiger">
          <FontAwesomeIcon icon={faGithub} size="2x" aria-hidden="true" title="GitHub profile" />
          <span className="sr-only">GitHub profile</span>
        </a></li>
        <li><a target="_blank" href="https://medium.com/@jasonjgeiger">
          <FontAwesomeIcon icon={faMedium} size="2x" aria-hidden="true" title="Medium profile" />
          <span className="sr-only">Medium profile</span>
        </a></li>
      </List>
    );
  }

export default SocialProfilesComponent;