import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub, faFlipboard, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTwitter,faLinkedin,faGithub, faFlipboard, faMedium);

export default class Markdown extends React.Component {

  render() {
    return (
      <ul>
        <li><a target="_blank" href="https://www.linkedin.com/in/jasonjgeiger/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a></li>
        <li><a target="_blank" href="https://twitter.com/jasonjgeiger">
          <FontAwesomeIcon icon={faTwitter} />
        </a></li>
        <li><a target="_blank" href="https://github.com/jasonjgeiger">
          <FontAwesomeIcon icon={faGithub} />
        </a></li>
        <li><a target="_blank" href="https://flipboard.com/@developmental">
          <FontAwesomeIcon icon={faFlipboard} />
        </a></li>
        <li><a target="_blank" href="https://medium.com/@jasonjgeiger">
          <FontAwesomeIcon icon={faMedium} />
        </a></li>
      </ul>
    );
  }
}