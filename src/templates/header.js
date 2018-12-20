import React from 'react'
import classNames from 'classnames/bind';
import Brand from '../components/brand'

import styles from './header.module.scss'
import Navigation from './navigation'

let cx = classNames.bind(styles);
let brandStyle = cx(["brand-module--invert",styles.brand]);
let navStyle = cx([styles.navigation]);

export default () => (
  <header className={styles.root}>
    <Brand className={brandStyle} left="OneThirty" right="Public"/>
    <Navigation className={navStyle} />
  </header>
)
