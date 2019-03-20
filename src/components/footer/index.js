import React from 'react'
import Brand from '../brand'
import styles from './footer.module.scss'


export default () => (
  <footer className={styles.root}>
    <Brand className="invert-dark" to="/the-end" left="The" right="End"/>
  </footer>
)
