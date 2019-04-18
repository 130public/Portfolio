import React from 'react'
import classNames from 'classnames/bind';
import Link from '../link'
import styles from './navigation.module.scss'

let cx = classNames.bind(styles);

export default class Navigation extends React.Component {
  render(){
    let className = cx([
      styles.root, this.props.className
    ]);
    return(
      <nav role="navigation" className={className}>
        <div className={styles.frame}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} to="/resume/">Resume</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/resources/">Resources</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/the-end/">Colophon</Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  };
};
