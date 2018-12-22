import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'
import heroStyles from '../templates/hero.module.css'

class Index extends React.Component {
  render() {
    const data = get(this, 'props.data')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const resources = get(this, 'props.data.allContentfulResource.edges')
    return (
      <Container>
        <Main padTop='large' height='full' style="none" offset={true}>
          <Helmet title={siteTitle} />
          <div className={heroStyles.hero}>
            {/* <Img className={styles.heroImage} fadeIn={true} alt={data.name} sizes={data.heroImage.sizes} /> */}
            <div className={heroStyles.heroDetails}>
              <h1>Jason J Geiger</h1>
              <p>Currently, I am a Senior UX Designer at Microsoft creating innovative learning solutions that empower people to gain influencial skills for the 21st century job force. As a designer I focus on user advocacy, experience strategy, and designing human centric AI and ML powered experiences.</p>
            </div>
          </div>
        </Main>
        </Container>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulResource {
      edges {
        node {
          title

        }
      }
    }
  }
`
