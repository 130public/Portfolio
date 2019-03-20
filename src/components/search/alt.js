import React, { Component, createRef } from 'react'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Index,
  connectAutoComplete
} from 'react-instantsearch-dom'


const Hit = function(hit){ return (
  <div>
    <pre>{JSON.stringify(hit,null,2)}</pre>
  </div>
)}

export default class Search extends Component {

  render() {
    
    const {indices} = this.props;

    return (
      <div>
      <InstantSearch
        appId="Z1PZEF7EGE"
        apiKey="072919c93ead458a15a4426547f71d52"
        indexName="Resource"
      >
        <SearchBox translation={{placholder:"Search"}}/>

        <Hits hitComponent={Hit} />
      </InstantSearch> 
     
     </div>
    )
  }
}