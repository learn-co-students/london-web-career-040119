import React from 'react'

const Search = props => <div>
  <div>
    <label>Sort by: </label>
    <select onChange={(e) => props.updateSortBy(e.target.value)}>
      <option value='none'>none</option>
      <option value='name'>name</option>
      <option value='weight'>weight</option>
    </select>
  </div>
  <div>
    <label>Show greased only: </label>
    <input onClick={props.toggleShowGreasedOnly} type="checkbox" />
  </div>
</div>

export default Search
