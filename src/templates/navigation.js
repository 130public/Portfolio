import React from 'react'
import classNames from 'classnames/bind';
import Link from '../components/link'
import styles from './navigation.module.scss'

let cx = classNames.bind(styles);

export default class Navigation extends React.Component {
  render(){
    let className = cx([
      styles.root, this.props.className
    ]);
    return(
      <nav role="navigation" className={className}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to="/projects/">Projects</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/resources/">Resources</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/cv/">CV</Link>
          </li>
          <li className={styles.item}>
            <a href className={styles.link} target="_blank" href="mailto:hello@130public.net">EMAIL</a>
          </li>
          <li className={styles.item}>
            <a href className={styles.link} target="_blank" href="https://github.com/jasonjgeiger/portfolio">REPO</a>
          </li>
        </ul>
      </nav>
    );
  };
};
