import React from 'react'
import Img from 'gatsby-image'
import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    {/* <Img className={styles.heroImage} fadeIn={true} alt={data.name} sizes={data.heroImage.sizes} /> */}
    <div className={styles.heroDetails}>
      <h1 className="type--headline3">{data.title}</h1>
    </div>
  </div>
)
