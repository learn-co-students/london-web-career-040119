import React, { Component } from 'react'

import Painting from './Painting'

import paintings from '../data/painting-data'

class PaintingList extends Component {

  state = {
    paintings: paintings,
  }

  getFilteredPaintings = () =>
    this.state.paintings
      .filter(painting => painting.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

  render () {
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
