import React from 'react'
import styles from "./skipToContent.module.scss";

class SkipToContent extends React.Component {
  render () {
    return (
    <a href="#main" className={styles.skip}>Skip to main content</a>
    );
  }
}

export default SkipToContent