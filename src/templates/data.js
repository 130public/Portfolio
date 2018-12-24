import React from 'react'
import classNames from 'classnames/bind';
import styles from './data.module.scss'

let cx = classNames.bind(styles);

export default class Main extends React.Component {
  render(){
    let classes = cx([
      styles.root
    ]);
    return (
      <main className={classes}>
        <pre>{JSON.stringify(this.props.data,null,2)}</pre>
      </main>
    );
  }
}