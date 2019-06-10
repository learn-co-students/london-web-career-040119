import React from 'react'

import Search from './Search'

import { Link } from 'react-router-dom'

const Navbar = props =>
  <div className={`ui inverted ${props.colour} menu`}>
    <a className='item'>
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
          {props.header}
        </div>
        <div className="sub header">
          {props.subHeader}
        </div>
      </h2>
    </a>
    <div className='item ui form'>
      <Search searchTerm={props.searchTerm} updateSearchTerm={props.updateSearchTerm} />
    </div>
    <div className='item'>
      <Link to='/hello'>Hello</Link>
    </div>
    <div className='item'>
      <Link to='/paintings'>Paintings</Link>
    </div>
  </div>

export default Navbar
