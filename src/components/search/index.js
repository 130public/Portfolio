import React, { Component, createRef } from 'react'
import {
  InstantSearch,
  SearchBox,
  Hits
} from 'react-instantsearch-dom'


const Hit = function(hit){ return (
  <div>
    <h1 className="hit-title">
      {hit.hit.title}
    </h1>
    <pre>{JSON.stringify(hit.hit,null,2)}</pre>
  </div>
)}

export default class Search extends Component {

  render() {
    return (
      <div>
      <InstantSearch
        appId="Z1PZEF7EGE"
        apiKey="072919c93ead458a15a4426547f71d52"
        indexName="Pages"
      >
        <SearchBox translation={{placholder:"Search"}}/>
        <Hits hitComponent={Hit} />
      </InstantSearch> 
     
     </div>
    )
  }
}