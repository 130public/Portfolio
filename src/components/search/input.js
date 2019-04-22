import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import styles from "./input.module.scss";


export default connectSearchBox(({ refine, ...rest }) => (
  <div>
      <label className="label">Refine results
        <input
          className="inputText"
          type="text"
          placeholder="term(s)"
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          {...rest}
        />
      </label>
    <div></div>
  </div>
))