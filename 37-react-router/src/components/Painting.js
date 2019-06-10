import React from 'react'

import './Painting.css'

import { Link } from 'react-router-dom'

const Painting = props =>
  <Link to={`/paintings/${props.painting.id}`}>
    <div className='painting'>
      <h2>Name: {props.painting.title}</h2>
      <h3>Author: {props.painting.artist.name}</h3>
      <img src={props.painting.image}/>
    </div>
  </Link>

export default Painting

// THIS IS A PAINTING OBJECT
// {
//   id: '59bd5a4c275b247913821d2a',
//   collecting_institution: '',
//   date: 'ca. 1665â€“1667',
//   dimensions: {
//     text: '17 1/2 Ã— 15 3/4 in',
//     height: 17.5,
//     width: 15.75,
//     depth: null,
//     diameter: null
//   },
//   slug: 'johannes-vermeer-study-of-a-young-woman',
//   title: 'Study of a Young Woman',
//   image:
//     'https://d32dm0rphc51dk.cloudfront.net/pLcp7hFbgtfYnmq-b_LXvg/medium.jpg',
//   artist: {
//     name: 'Johannes Vermeer',
//     hometown: 'Delft, Netherlands',
//     birthday: '1632',
//     deathday: '1675'
//   },
//   votes: 21
// },
