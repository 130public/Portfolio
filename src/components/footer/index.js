import React from 'react'
import Brand from '../brand'
import styles from './footer.module.scss'


export default () => (
  <footer className={styles.root}>
    <Brand className="invert-dark" to="/the-end" left="The" right="End"/>
    <a href="https://app.netlify.com/sites/130public/deploys"><img src="https://api.netlify.com/api/v1/badges/a6afc2da-6f0d-4152-9a81-3012cec769ac/deploy-status"/></a>
  </footer>
)
