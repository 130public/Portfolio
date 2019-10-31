import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faGithub, faFlipboard, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './socialProfiles.module.scss'

library.add(faTwitter,faLinkedin,faGithub, faFlipboard, faMedium);

export default class Markdown extends React.Component {

  render() {
    return (
      <ul className={styles.socialList}>
        <li><a target="_blank" href="https://www.linkedin.com/in/jasonjgeiger/" >
          <FontAwesomeIcon size="2x" icon={faLinkedin} aria-hidden="true" title="LinkedIn profile" />
          <span class={styles.srOnly}>LinkedIn profile</span>
        </a></li>
        <li><a target="_blank" href="https://twitter.com/jasonjgeiger">
          <FontAwesomeIcon size="2x" icon={faTwitter} aria-hidden="true" title="Twitter profile" />
          <span class={styles.srOnly}>Twitter profile</span>
        </a></li>
        <li><a target="_blank" href="https://github.com/jasonjgeiger">
          <FontAwesomeIcon size="2x" icon={faGithub} aria-hidden="true" title="GitHub profile" />
          <span class={styles.srOnly}>GitHub profile</span>
        </a></li>
        <li><a target="_blank" href="https://medium.com/@jasonjgeiger">
          <FontAwesomeIcon size="2x" icon={faMedium} aria-hidden="true" title="Medium profile" />
          <span class={styles.srOnly}>Medium profile</span>
        </a></li>
      </ul>
    );
  }
}