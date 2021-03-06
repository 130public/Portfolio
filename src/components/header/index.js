import React from 'react'
import classNames from 'classnames/bind';
import Brand from '../brand'
import Navigation from '../navigation'

import styles from './header.module.scss'

let cx = classNames.bind(styles);
let brandStyle = cx(["brand-module--invert",styles.brand]);
let navStyle = cx([styles.navigation]);

export default () => (
  <header className={styles.root}>
    <Brand className={brandStyle} to="/" left="OneThirty" right="Public"/>
    <Navigation className={navStyle} />
  </header>
)