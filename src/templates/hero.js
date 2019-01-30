import React from 'react'
import classNames from 'classnames/bind'
import Search from '../components/search';
import styles from './hero.module.scss'
import Animation from '../components/hero-animation';

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` }
]


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
        <Search collapse indices={searchIndices} />
        {/* <Animation /> */}
        {/* <h1 className={styles.headline}>{this.props.title}</h1>
        <p className={styles.body}>
          <Markdown value={this.props.body} />
        </p>
        {this.props.children} */}
      </div>
    )
  }
}

export default Hero
