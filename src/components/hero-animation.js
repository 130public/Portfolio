import React from "react"
import Anime from "react-anime"
import styles from './hero-animation.module.scss'

class HeroAnimation extends React.Component {

  constructor(props) {
    super(props);
    this.targets = [];
  }


  render() {

    return (
      <div className={styles.animation}>
        <Anime easing="easeOutElastic"
          duration={1000}
          direction="normal"
          loop={true}
          delay={(el, index) => index * 1240}
          translateX={(el, index) => index * 200}
          translateY={(el, index) => index * 200}
          scale={[1.5, 3.0]} >
          <svg className={styles.large} viewBox="0 0 96 96">
            <defs>
              <linearGradient id="circleGradient" x1="0%" x2="100%" y1="20%" y2="80%">
                <stop stop-color="#373734" offset="0%"/>
                <stop stop-color="#242423" offset="50%"/>
                <stop stop-color="#0D0D0C" offset="100%"/>
              </linearGradient>
            </defs>
            <circle cx="48" cy="48" r="28" fill-rule="evenodd" stroke-linecap="square" fill="url(#circleGradient)"/>
          </svg>
          <svg className={styles.small} viewBox="0 0 96 96">
            <polygon fill-rule="evenodd" points="48 17.28 86.4 80.11584 9.6 80.11584" stroke-linecap="square"/>
          </svg>
          <svg className={styles.large} viewBox="0 0 96 96">
            <defs>
              <linearGradient id="triangleGradient" x1="0%" x2="100%" y1="20%" y2="80%">
                <stop stop-color="#373734" offset="0%"/>
                <stop stop-color="#242423" offset="50%"/>
                <stop stop-color="#0D0D0C" offset="100%"/>
              </linearGradient>
            </defs>
            <polygon fill-rule="evenodd" points="48 17.28 86.4 80.11584 9.6 80.11584" stroke-linecap="square" fill="url(#triangleGradient)"/>
          </svg>
          <svg className={styles.xsmall} viewBox="0 0 96 96">
            <polygon fill-rule="evenodd" points="48 17.28 86.4 80.11584 9.6 80.11584" stroke-linecap="square"/>
          </svg>
          <svg className={styles.xsmall} viewBox="0 0 96 96">
            <rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
          <svg className={styles.small} viewBox="0 0 96 96">
            <rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
          <svg className={styles.large} viewBox="0 0 96 96">
            <defs>
              <linearGradient id="rectGradient" x1="0%" x2="100%" y1="20%" y2="80%">
                <stop stop-color="#373734" offset="0%"/>
                <stop stop-color="#242423" offset="50%"/>
                <stop stop-color="#0D0D0C" offset="100%"/>
              </linearGradient>
            </defs>
            <rect width="48" height="48" x="24" y="24" fill-rule="evenodd" stroke-linecap="square" fill="url(#rectGradient)"/>
          </svg>
          <svg className={styles.small} viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="32" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
          <svg className={styles.xsmall} viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="32" fill-rule="evenodd" stroke-linecap="square"/>
          </svg>
        </Anime>
      </div>
    );
    }
  }
  export default HeroAnimation;