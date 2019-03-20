import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'


export default connectSearchBox(({ refine, ...rest }) => (
  <div>
    <input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      {...rest}
    />
    <div></div>
  </div>
))