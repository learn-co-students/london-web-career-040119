import React, { Component } from 'react'
import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'
import TimeOnPage from './TimeOnPage'

class App extends Component {

  state = {
    selectedPainting: null,
    searchTerm: '',
    showTimeOnPage: true
  }

  hideTimeOnPage = () => {
    this.setState({ showTimeOnPage: false })
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

  componentDidMount () {
    console.log('App mounted!')
  }

  render () {
    console.log('App is rendering!')
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
        this.state.showTimeOnPage &&
          <TimeOnPage hideTimeOnPage={this.hideTimeOnPage} />
      }
      {
        this.state.selectedPainting
          ? <PaintingDetails deselectPainting={this.deselectPainting} painting={this.state.selectedPainting} />
          : <PaintingList searchTerm={this.state.searchTerm} selectPainting={this.selectPainting} />
      }
    </div>
  }
}

export default App
