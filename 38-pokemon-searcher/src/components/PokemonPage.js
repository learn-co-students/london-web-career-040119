import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

import api from '../services/api'
import { fixStats } from '../services/helpers'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }

  addPokemon = pokemon => this.setState({ pokemons:  [pokemon, ...this.state.pokemons] })

  getPokemons = () => {
    api.getPokemons()
      .then(pokemons => {
        pokemons = pokemons.map(fixStats)
        this.setState({ pokemons })
      })
  }

  updateSearchTerm = searchTerm => this.setState({ searchTerm })

  componentDidMount () {
    this.getPokemons()
  }

  handleSearchChange = (_, { value }) => {
    this.updateSearchTerm(value)
  }

  getFilteredPokemons = () => {
    const { pokemons, searchTerm } = this.state
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  render() {
    const { handleSearchChange, getFilteredPokemons, addPokemon } = this

    const filteredPokemons = getFilteredPokemons()
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={addPokemon} />
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
      </div>
    )
  }
}

export default PokemonPage
