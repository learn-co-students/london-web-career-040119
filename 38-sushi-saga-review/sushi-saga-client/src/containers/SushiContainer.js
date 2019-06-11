import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
          props.sushis.map(sushi => <Sushi sushi={sushi} eatSushi={props.eatSushi}/>)
        }
        <MoreButton shiftSushis={props.shiftSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer