import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../templates/container'
import Main from '../templates/main'

import heroStyles from '../templates/hero.module.css'
import Grid from '../components/grid'

class Index extends React.Component {
  render() {
    const data = get(this, 'props.data')
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const resources = get(this, 'props.data.allContentfulResource.edges')
    return (
      <Container>
        <Main alt={false} offset={true}>
          <Helmet title={siteTitle} />
          <div className={heroStyles.hero}>
            {/* <Img className={styles.heroImage} fadeIn={true} alt={data.name} sizes={data.heroImage.sizes} /> */}
            <div className={heroStyles.heroDetails}>
              <h1 className="type--headline3 type--style-uppercase type--align-left">Jason J Geiger</h1>
              <p className="type--headline6 type--align-left">Currently, I am a Senior UX Designer at Microsoft creating innovative learning solutions that empower people to gain influencial skills for the 21st century job force. As a designer I focus on user advocacy, experience strategy, and designing human centric AI and ML powered experiences.</p>
            </div>
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Recent Projects</h2>
            {/* <pre>{JSON.stringify(projects,null,2)}</pre> */}
            <Grid nodes={projects} />
          </div>
          <div className="wrapper">
            <h2 className="section-headline">Resources</h2>
            {/* <pre>{JSON.stringify(resources,null, 2)}</pre> */}
            <Grid nodes={resources} />
          </div>
        </Main>
        </Container>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulProject {
      edges {
        node {
          title
          slug

        }
      }
    }
    allContentfulResource {
      edges {
        node {
          title

        }
      }
    }
  }
`
