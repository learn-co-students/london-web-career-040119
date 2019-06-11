import React from 'react'
import { Form } from 'semantic-ui-react'

import api from '../services/api'
import { fixStats } from '../services/helpers'

class PokemonForm extends React.Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, hp, backUrl, frontUrl } = this.state
    const pokemon = {
      name: name,
      stats: [
        {name: 'hp', value: hp}
      ],
      sprites: {
        back: backUrl,
        front: frontUrl
      }
    }

    api.addPokemon(pokemon)
      .then(pokemon => {
        pokemon = fixStats(pokemon)
        this.props.addPokemon(pokemon)
      })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { handleSubmit, handleChange } = this
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
