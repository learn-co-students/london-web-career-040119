import React from 'react'

import Painting from './Painting'

import paintings from '../data/painting-data'

const PaintingList = props =>
  <ul>
    {
      paintings.map(painting => <Painting name="Nicolas!" painting={painting} />)
    }
  </ul>

export default PaintingList
