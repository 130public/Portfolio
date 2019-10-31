import React from 'react'
import SEO from '../components/seo'
import Page from '../components/page'



class Fun extends React.Component {
  render() {
    return (
      <Page>
        <SEO 
          title="Page not found" 
          description=""
        />
        <h1>404</h1>
        </Page>
    )
  }
}

export default Fun