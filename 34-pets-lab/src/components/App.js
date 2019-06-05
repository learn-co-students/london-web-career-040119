import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  adoptPet = petId => {
    // give me a new array that has:
    // - all of the same pets
    // - but the pet with a matching ID should be a copy with isAdopted set to true
    const pets = this.state.pets.map(pet => pet.id === petId
      ? {...pet, isAdopted: true}
      : pet
    )
    this.setState({ pets })
  }

  changeFilter = (event) => {
    this.setState({ filters: { type: event.target.value } })
  }

  getPets = () => {
    const filter = this.state.filters.type
    const url = filter === 'all' ? '/api/pets' : `/api/pets?type=${filter}`

    fetch(url)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }))
  }

  render() {
    const { getPets, adoptPet, changeFilter } = this
    const { pets } = this.state
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters getPets={getPets} changeFilter={changeFilter} />
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptPet={adoptPet} pets={pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
