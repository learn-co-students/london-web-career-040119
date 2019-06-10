import React from 'react'

const Search = props =>
  <form onSubmit={e => e.preventDefault()}>
    <input value={props.searchTerm} onChange={props.updateSearchTerm} placeholder='enter your search here' />
  </form>

export default Search
