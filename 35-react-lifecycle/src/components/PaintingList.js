import React, { Component } from 'react'

import Painting from './Painting'

import paintings from '../data/painting-data'

class PaintingList extends Component {

  state = {
    paintings: []
  }

  getFilteredPaintings = () =>
    this.state.paintings
      .filter(painting => painting.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

  getPaintings = () => {
    fetch('http://localhost:3000/paintings')
      .then(resp => resp.json())
      .then(paintings => this.setState({ paintings }))
  }

  componentDidUpdate () {
    console.log('PaintingList props:', this.props)
  }

  componentDidMount () {
    console.log('PaintingList mounted!')
    this.getPaintings()
  }

  render () {
    console.log('PaintingList is rendering!')
    console.log(`PaintingList state: `, this.state)
    const filteredPaintings = this.getFilteredPaintings()
    return (
      <ul>
        {
          filteredPaintings
            .map(painting => <Painting handleClick={this.props.selectPainting} painting={painting} />)
        }
      </ul>
    )
  }
}


export default PaintingList
