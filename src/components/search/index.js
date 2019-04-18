import React, { Component, createRef } from 'react'
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom'

import Grid from '../grid'
import Input from './input'
import * as hitComps from './hits'
import styles from './search.module.scss'

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits ? children : `No results for ${state.query}`
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`
)

export default class Search extends Component {
  state = { query: ``, focussed: false, ref: createRef() }

  updateState = state => this.setState(state)

  render() {
    const { query, focussed, ref } = this.state
    const { indices } = this.props
    return (
      <InstantSearch
        appId={process.env.ALGOLIA_APPID}
        apiKey={process.env.ALGOLIA_APIKEY}
        indexName={indices[0].name}
        onSearchStateChange={this.updateState}
      >
        <Input  />
        <div>
          {indices.map(({ name, title, hitComp }) => (
            <Index key={name} indexName={name}>
              <header>
                <h3>{title} count: <Stats /></h3>
              </header>
              <Results>
                <Grid>
                  <Hits className={styles.hits} hitComponent={hitComps[hitComp]} />
                </Grid>
              </Results>
            </Index>
          ))}
        </div>
      </InstantSearch>
    )
  }
}