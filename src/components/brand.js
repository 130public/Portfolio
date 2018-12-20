import React from 'react'
import classNames from 'classnames/bind';
import Link from '../components/link'
import styles from './brand.module.scss'

let cx = classNames.bind(styles);

export default class Brand extends React.Component {
  render(){
    let className = cx([
      styles.root, this.props.className
    ]);
    return (
      <div className={className}>
        <Link className={styles.link} to="/">
          <span className={styles.left}>{this.props.left}</span>
          <span className={styles.space}>&nbsp;</span>
          <span className={styles.right}>{this.props.right}</span>
        </Link>
      </div>
    );
  }
}