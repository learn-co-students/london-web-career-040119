import React from 'react'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

const HogDetails = ({ hideDetails, hog }) =>
  <div>
    <p>Specialty: {hog.specialty}</p>
    <p>{hog.greased ? 'Greased' : 'Not Greased'}</p>
    <p>Weight: {hog[weight]} </p>
    <button onClick={hideDetails}>▲</button>
  </div>

export default HogDetails
