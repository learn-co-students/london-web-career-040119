import React from 'react'
import { Card } from 'semantic-ui-react'


class PokemonCard extends React.Component {
  state = {
    flipped: false
  }

  flip = () => this.setState({ flipped: !this.state.flipped })

  render() {
    const { pokemon } = this.props
    const { flipped } = this.state
    const { hp } = pokemon.stats
    const { flip } = this
    return (
      <Card>
        <div onClick={flip}>
          <div className="image">
            <img src={flipped ? pokemon.sprites.back : pokemon.sprites.front} alt={pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
