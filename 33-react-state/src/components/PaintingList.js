import React, { Component } from 'react'

import Painting from './Painting'

import paintings from '../data/painting-data'

class PaintingList extends Component {

  state = {
    paintings: paintings,
  }

  render () {
    return (
      <ul>
        {
          this.state.paintings.map(painting => <Painting handleClick={this.props.selectPainting} painting={painting} />)
        }
      </ul>
    )
  }
}


export default PaintingList
