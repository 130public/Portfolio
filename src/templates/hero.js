import React from 'react'
import classNames from 'classnames/bind'
import styles from './hero.module.scss'
import Markdown from '../components/markdown';


let cx = classNames.bind(styles);

class Hero extends React.Component {
  render(){
    let classes = cx([
      styles.root, 
      this.props.className,
      {
        [styles[this.props.style]]: (this.props.style) ? this.props.style :'default',
      }
    ]);
    return (
      <div className={classes}>
        {/* <Animation /> */}
        <h1 className={styles.headline}>{this.props.title}</h1>
        <p className={styles.body}>
          <Markdown value={this.props.body} />
        </p>
        {this.props.children}
      </div>
    )
  }
}

export default Hero
