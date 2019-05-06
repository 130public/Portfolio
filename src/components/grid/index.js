import React from 'react'
import classNames from 'classnames/bind'
import styles from './grid.module.scss'

let cx = classNames.bind(styles);

export default class Grid extends React.Component {
  render(){
    let classes = cx([
      styles.root, 
      this.props.className,
      {
        [styles[this.props.style]]: (this.props.style) ? this.props.style :'default',
      }
    ]);
    return(
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}