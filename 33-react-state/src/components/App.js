import React, { Component } from 'react'
import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'

class App extends Component {

  state = {
    selectedPainting: null,
    searchTerm: 'woman'
  }

  selectPainting = (painting) => {
    this.setState({ selectedPainting: painting })
  }

  deselectPainting = () => {
    this.setState({ selectedPainting: null })
  }

  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return <div className="App">
      <Navbar
        header="My paintings app!"
        subHeader="Having fun with react props!"
        colour="red"
        icon="react"
        updateSearchTerm={this.updateSearchTerm}
        searchTerm={this.state.searchTerm}
      />
      {
        this.state.selectedPainting
          ? <PaintingDetails deselectPainting={this.deselectPainting} painting={this.state.selectedPainting} />
          : <PaintingList searchTerm={this.state.searchTerm} selectPainting={this.selectPainting} />
      }
    </div>
  }
}

export default App
