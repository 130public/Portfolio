import React from 'react'
import classNames from 'classnames/bind';
import styles from './hero.module.scss'

let cx = classNames.bind(styles);

class Hero extends React.Component {
  render(){
    let classes = cx([
      styles.root, styles.fun, this.props.className
    ]);
    return (
      <div className={classes}>
        <h1 className={styles.headline}>{this.props.title}</h1>
        <p className={styles.body}>{this.props.body}</p>
        {this.props.children}
      </div>
    )
  }
}

export default Hero
