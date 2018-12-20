import React from 'react'
import classNames from 'classnames/bind';
import styles from './main.module.scss'

let cx = classNames.bind(styles);

export default class Main extends React.Component {
  render(){
    let classes = cx([
      styles.root,
      {
        [styles.offset]: this.props.offset,
        [styles[this.props.style]]: this.props.style,
        [styles.paddingTopLarge]: this.props.padTop == 'large'
      }
    ]);
    return (
      <main className={classes}>
        {this.props.children}
      </main>
    );
  }
}