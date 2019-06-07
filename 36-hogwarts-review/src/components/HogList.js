import React from 'react'

import Hog from './Hog'

const HogList = props => <div className='ui cards'>
  {
    props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
  }
</div>

export default HogList
