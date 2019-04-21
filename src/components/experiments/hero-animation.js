import React from "react"
import posed from 'react-pose';
import styles from './hero-animation.module.scss'

const Box = posed.div({
  hidden: { 
    scaleX: 0.75,
    scaleY: 0.75
  },
  visible: { 
    scaleX: 1,
    scaleY: 1,
    rotation: 240,
    transition: ({ from, to }) => ({
      type: 'keyframes',
      values: [from, 5, 10],
      times: [0, 0.25, 5]
    })
  }
})

class HeroAnimation extends React.Component {
  state = { isVisible: true };

  constructor(props) {
    super(props);
    this.targets = [];
  }

  
  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }


  render() {
    const { isVisible } = this.state;
    return (
      <div className={styles.animation}>
          <Box  className={styles.poseDemo} pose={ isVisible ? 'visible' : 'hidden' } />
          <hr/>
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
        
      </div>
    );
    }
  }
  export default HeroAnimation;