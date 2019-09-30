import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults
} from 'react-instantsearch-dom'

import Grid from '../grid'
import Input from './input'
import AlgoliaLogo from './algoliaLogo'
import * as hitComps from './hits'
import styles from './search.module.scss'


//FORMATING
const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits ? children : `No results for ${state.query}`
)
const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} item${res.nbHits > 1 ? `s` : ``}`
)

//CLASS
class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { indices } = this.props

    return (
      <InstantSearch
        appId={process.env.ALGOLIA_APPID}
        apiKey={process.env.ALGOLIA_APIKEY}
        indexName={indices[0].name}
      >
        <div>
          {indices.map(({ name, title, hitComp }) => (
            <Index key={name} indexName={name}>
              <header>
                <div>
                <h3>Results: <Stats /></h3>
                </div>
                <div>
                  <Input />
                </div>
              </header>
              <Results>
                <Grid>
                  <Hits className={styles.hits} hitComponent={hitComps[hitComp]} />
                </Grid>
              </Results>
            </Index>
          ))}
        </div>
        <AlgoliaLogo />
      </InstantSearch>
    )
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  location: PropTypes.object.isRequired,
};

export default Search