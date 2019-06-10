import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import hogs from '../porkers_data'
import Search from './Search'
import HogList from './HogList'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

const isGreased = hog => hog.isGreased
const byName = (a, b) => a.name.localeCompare(b.name)
const byWeight = (a, b) => b[weight] - a[weight]

class App extends Component {

  state = {
    hogs: hogs,
    showGreasedOnly: false,
    sortBy: 'none'
  }

  updateSortBy = sortType => {
    this.setState({ sortBy: sortType })
  }

  toggleShowGreasedOnly = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }

  sortHogs = hogs => {
    const { sortBy } = this.state
    const hogsCopy = [...hogs]

    if (sortBy === 'name') hogsCopy.sort(byName)
    if (sortBy === 'weight') hogsCopy.sort(byWeight)

    return hogsCopy
  }

  getFilteredHogs = () => {
    const { hogs, showGreasedOnly } = this.state
    return showGreasedOnly 
      ? hogs.filter(isGreased)
      : hogs
  }

  render() {
    const filteredHogs = this.getFilteredHogs()
    const filteredAndSortedHogs = this.sortHogs(filteredHogs)

    const { toggleShowGreasedOnly, updateSortBy } = this
    return <div className="App">
      <Nav />
      <Search
        updateSortBy={updateSortBy}
        toggleShowGreasedOnly={toggleShowGreasedOnly}
      />
      <HogList hogs={filteredAndSortedHogs} />
    </div>
  }
}

export default App
