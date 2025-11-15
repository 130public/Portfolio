import React from 'react'
import classNames from 'classnames/bind';
import styles from './main.module.scss'

let cx = classNames.bind(styles);

export default class Main extends React.Component {
  render(){
    let mainClasses = cx([
      styles.root,
      {
        [styles.offset]: this.props.offset,
        [styles[this.props.style]]: (this.props.style) ? this.props.style :'',
        [styles['height-'+this.props.height]]: this.props.height,
        [styles.paddingTopLarge]: this.props.padTop == 'large'
      }
    ]);
    let innerClasses = cx([
      styles.maxWidth
    ]);
    return (
      <main id="main" className={mainClasses}>
        <div className={innerClasses}>
          {this.props.children}
          <pre>Last Updated: {this.props.updatedAt}</pre>
        </div>
      </main>
    );
  }
}