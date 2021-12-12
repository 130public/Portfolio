import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub, faFlipboard, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './socialProfiles.module.scss'

library.add(faLinkedin,faGithub);

export default class Markdown extends React.Component {

  render() {
    return (
      <ul className={styles.socialList}>
        <li><a target="_blank" href="https://www.linkedin.com/in/jasonjgeiger/" >
          <FontAwesomeIcon size="2x" icon={faLinkedin} aria-hidden="true" title="LinkedIn profile" />
          <span className={styles.srOnly}>LinkedIn profile</span>
        </a></li>
        <li><a target="_blank" href="https://github.com/jasonjgeiger">
          <FontAwesomeIcon size="2x" icon={faGithub} aria-hidden="true" title="GitHub profile" />
          <span className={styles.srOnly}>GitHub profile</span>
        </a></li>
      </ul>
    );
  }
}