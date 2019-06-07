import React from 'react'

import HogDetails from './HogDetails'

// {
//   name: 'Mudblood',
//   specialty: 'Mediocre magic',
//   greased: false,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//   'highest medal achieved': 'bronze'
// }


class Hog extends React.Component {

  state = {
    showDetails: false 
  }

  showDetails = () => {
    this.setState({ showDetails: true })
  }

  hideDetails = () => {
    this.setState({ showDetails: false })
  }

  render () {
    const { hog } = this.props
    const { name } = hog

    const fileName = name.toLowerCase().replace(/ /g, '_')
    const imageSrc = require(`../hog-imgs/${fileName}.jpg`)

    return <div className='ui card'>
      <h2>{name}</h2>
      <img src={imageSrc} />
      <br />
      {
        this.state.showDetails
        ? <HogDetails hog={hog} hideDetails={this.hideDetails} />
        : <button onClick={this.showDetails}>▼</button>
      }
    </div>
  }
}

export default Hog
