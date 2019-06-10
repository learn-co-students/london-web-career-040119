import React, { Component } from 'react'
import Navbar from './Navbar'
import PaintingList from './PaintingList'
import PaintingDetails from './PaintingDetails'

import { Route, Switch } from 'react-router-dom'

import paintings from '../data/painting-data'


class App extends Component {

  state = {
    searchTerm: '',
    paintings: paintings
  }

  getFilteredPaintings = () =>
    this.state.paintings
      .filter(painting => painting.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    const filteredPaintings = this.getFilteredPaintings()
    return <div className="App">
      <Navbar
        header="My paintings app!"
        subHeader="Having fun with react props!"
        colour="red"
        icon="react"
        updateSearchTerm={this.updateSearchTerm}
        searchTerm={this.state.searchTerm}
      />
      <Switch>
        <Route exact path='/hello' component={() => <h1>HELLO THERE!</h1>} />

        <Route path='/paintings/:id' component={props => {
          // we have the id!
          const id = props.match.params.id
          // where are the paintings?
          const paintings = this.state.paintings
          const selectedPainting = paintings.find(painting => painting.id === id)

          if (selectedPainting === undefined) {
            // let counter = 3
            // setInterval(() => counter--, 1000)
            setTimeout(() => props.history.push('/paintings'), 3000)
            return <h1>Painting: {id} not found! Taking you back to paintings in 3 seconds!</h1>
          }

          return <PaintingDetails painting={selectedPainting} />
        }} />
  
        <Route path='/paintings' component={props => {
          return <PaintingList paintings={filteredPaintings} />
        }} />
        <Route component={() => <h1>404 - Not found!!!</h1>} />
      </Switch>
    </div>
  }
}

export default App
