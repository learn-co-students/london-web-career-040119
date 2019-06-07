import React from 'react'
import { getHogImageSrc } from '../helpers'

const HogDetails = ({ hog, deselectHog }) =>
  <div className='ui twelve wide column'>
    <button onClick={deselectHog}>GO BACK</button>
    <br />
    <img src={getHogImageSrc(hog.name)} />
    <p>{hog.name}</p>
    <p>{hog.specialty}</p>
  </div>

export default HogDetails
