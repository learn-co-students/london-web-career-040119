import React, { Component } from 'react'

import Painting from './Painting'

class PaintingList extends Component {


  render () {
    return (
      <div className='paintings'>
        {
          this.props.paintings
            .map(painting => <Painting painting={painting} />)
        }
      </div>
    )
  }
}


export default PaintingList
