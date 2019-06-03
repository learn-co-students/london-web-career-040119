import React from 'react'

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
  </div>

export default Navbar
