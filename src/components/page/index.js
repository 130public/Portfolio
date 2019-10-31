import React from 'react'
import classNames from 'classnames/bind';
import SkipToContent from '../skipToContent'
import Header from '../header'
import Footer from '../footer'
import styles from './page.module.scss'

let cx = classNames.bind(styles);

export default class Page extends React.Component {
  render(){
    let classes = cx([
      styles.root, this.props.className, 'typography'
    ]);
    console.log(this.props.site);
    return (
      <div className={classes}>
        <SkipToContent/>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}