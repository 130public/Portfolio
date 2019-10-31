import React from 'react'
import SEO from '../components/seo'
import Page from '../components/page'
import Animation from '../components/experiments/hero-animation';



class Fun extends React.Component {
  render() {

  

    return (
      <Page>
        <SEO 
          title="" 
          description=""
        />
        <Animation />
      </Page>
    )
  }
}

export default Fun