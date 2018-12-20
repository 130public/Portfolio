import React from 'react'
import classNames from 'classnames/bind';
import Brand from '../components/brand'
import brandStyles from '../components/brand.module.scss'
import styles from './footer.module.scss'

let cx = classNames.bind(brandStyles);
let brand = cx(['brand-left','brand-right','invert-dark']);

export default () => (
  <footer className={styles.root}>
    <Brand className={brand} left="The" right="End"/>
  </footer>
)
