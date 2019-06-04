import React, { Component } from 'react'
import Navbar from './Navbar'
import PaintingList from './components/PaintingList'
import PaintingDetails from './components/PaintingDetails'

class App extends Component {

  state = {
    selectedPainting: null
  }

  selectPainting = (painting) => {
    this.setState({ selectedPainting: painting })
  }

  deselectPainting = () => {
    this.setState({ selectedPainting: null })
  }

  render () {
    return <div className="App">
      <Navbar
        header="My paintings app!"
        subHeader="Having fun with react props!"
        colour="red"
        icon="react"
      />
      {
        this.state.selectedPainting
          ? <PaintingDetails deselectPainting={this.deselectPainting} painting={this.state.selectedPainting} />
          : <PaintingList selectPainting={this.selectPainting} />
      }
    </div>
  }
}

export default App
