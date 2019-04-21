import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'


export default connectSearchBox(({ refine, ...rest }) => (
  <div>
      <label>Refine results
        <input
          type="text"
          placeholder="Refine results"
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          {...rest}
        />
      </label>
    <div></div>
  </div>
))