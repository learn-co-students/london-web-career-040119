import React from 'react'

import { Link } from 'react-router-dom'

const PaintingDetails = props =>
  <div>
    <h2>Name: {props.painting.title}</h2>
    <h3>Author: {props.painting.artist.name}</h3>
    <img src={props.painting.image}/>
    <Link to='/paintings'>BACK</Link>
  </div>

export default PaintingDetails
