import React from 'react'
import classNames from 'classnames/bind';
import Link from '../link'
import styles from './brand.module.scss'

let cx = classNames.bind(styles);

export default class Brand extends React.Component {
  render(){
    let className = cx([
      styles.root, this.props.className
    ]);
    const {to} = this.props;
    return (
      <Link className={className} to={to}>
          <span className={styles.left}>{this.props.left}</span>
          <span className={styles.space}>&nbsp;</span>
          <span className={styles.right}>{this.props.right}</span>
      </Link>
    );
  }
}