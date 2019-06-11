import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startSushi: 0,
    eatenSushis: [],
    amount: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis: sushis.map(sushi => Object.assign({}, sushi, {eaten: false}))}))
  }

  shiftSushis = () => {
    this.setState({
      startSushi: this.state.startSushi + 4
    })
  }

  eatSushi = (e, eatenSushi) => {
    // 1. One way would to dynamically update our eaten sushis
    // would be to modify the e.target props as needed (
      // remember that we have an img within a div ).
    // 2.Alternatively we can filter like we first went about
    // doing, but this didn't match the gif user flow.
    // 3. Another way would be to modify our api data as we did
    // with Object.assign.
    // 4. The last foreseable way would be to send eatenSushis
    // down to our Sushi component where we can perform an 
    // includes check in the ternary.

    // if (e.target.tagName === 'DIV') {
    //   if (e.target.querySelector('img')) {
    //     e.target.querySelector('img').remove()
    //   }
    // } else if (e.target.tagName === 'IMG') {
    //   // e.target.remove()
    //   // e.target.style.display = 'none'
    //   console.log(e.target.style.display)
    // }
    if (this.state.amount - eatenSushi.price >= 0 && !eatenSushi.eaten) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, ''],
        // sushis: this.state.sushis.filter(sushi => sushi.id !== eatenSushi.id),
        amount: this.state.amount - eatenSushi.price
      })
    }
    eatenSushi.eaten = true
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(this.state.startSushi, this.state.startSushi + 4)} shiftSushis={this.shiftSushis} eatSushi={this.eatSushi} />
        <Table eatenSushis={this.state.eatenSushis} amount={this.state.amount}/>
      </div>
    );
  }
}

export default App;