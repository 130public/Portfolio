import React, { Component } from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types';
import qs from 'qs';
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults
} from 'react-instantsearch-dom'

import Grid from '../grid'
import Input from './input'
import * as hitComps from './hits'
import styles from './search.module.scss'

//QUERY
const updateAfter = 700;
const createURL = state => `?query=${state.indices["Resource"].query}`;
const searchStateToUrl = (props, searchState) =>
  searchState ? `${props.location.pathname}${createURL(searchState)}` : '';
const urlToSearchState = location => location.search.slice(7);

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
    
    this.state = {
      searchState: urlToSearchState(props.location),
    };

  }

  componentWillReceiveProps(props) {

    if (props.location !== this.props.location) {
      this.setState({ searchState: urlToSearchState(props.location) });
    }

  }

  onSearchStateChange = searchState => {

    clearTimeout(this.debouncedSetState);
    this.debouncedSetState = setTimeout(() => {
      // navigate(
      //   searchStateToUrl(this.props, searchState),
      //   searchState
      // );
    }, updateAfter);
    this.setState({ searchState });

  }

  render() {
    const { indices } = this.props

    return (
      <InstantSearch
        appId={process.env.ALGOLIA_APPID}
        apiKey={process.env.ALGOLIA_APIKEY}
        indexName={indices[0].name}
        searchState={this.state.searchState}
        onSearchStateChange={this.onSearchStateChange}
        createURL={createURL}
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