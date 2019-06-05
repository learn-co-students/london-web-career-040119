import React from 'react'

const PaintingDetails = props =>
  <div>
    Painting Details here!
    Title: {props.painting.title}
    <button onClick={props.deselectPainting}>BACK</button>
  </div>

export default PaintingDetails
