import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import HogList from './HogList'
import HogDetails from './HogDetails'

import hogs from '../porkers_data'

class App extends Component {
  state = {
    hogs: hogs,
    selectedHog: null
  }

  selectHog = selectedHog => {
    this.setState({ selectedHog })
  }

  deselectHog = () => {
    this.setState({ selectedHog: null })
  }

  render () {
    const { hogs, selectedHog } = this.state
    const { selectHog, deselectHog } = this
    return (
      <div className='App'>
        <Nav />
        {
          selectedHog
            ? <HogDetails hog={selectedHog} deselectHog={deselectHog} />
            : <HogList hogs={hogs} selectHog={selectHog} />
        }
      </div>
    )
  }
}

export default App
