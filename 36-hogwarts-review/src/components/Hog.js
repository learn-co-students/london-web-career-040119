import React from 'react'
import { getHogImageSrc } from '../helpers'

const Hog = ({ hog, selectHog }) => {

  return (
    <div onClick={() => selectHog(hog)} className='ui eight wide column'>
      <p>{hog.name}</p>
      <img src={getHogImageSrc(hog.name)} alt='' />
    </div>
  )
}

export default Hog
