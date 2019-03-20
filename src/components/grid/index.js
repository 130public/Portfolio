import React from 'react'
import styles from './grid.module.scss'


export default class Grid extends React.Component {
  render(){
    return(
      <div className={styles.root}>
        {this.props.children}
      </div>
    )
  }
}