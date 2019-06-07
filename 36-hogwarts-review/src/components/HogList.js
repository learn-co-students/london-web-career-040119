import React from 'react'

import Hog from './Hog'

const HogList = ({ hogs, selectHog }) =>
  <div id='hog-list'>
    {
      hogs.map(hog =>
        <Hog
          key={hog.name}
          hog={hog}
          selectHog={selectHog}
        />
      )
    }
  </div>

export default HogList
