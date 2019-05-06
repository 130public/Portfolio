import React from 'react'
import Page from '../components/page'
import Hero from '../components/hero'


class Fun extends React.Component {
  render() {

    return (
      <Page className="fun">
        <Hero title="404" body="Not found" style="blank" className="fullHeight" />
      </Page>
    )
  }
}

export default Fun