import React, { Component } from 'react'

class TimeOnPage extends Component {
  state = {
    timer: 0
  }

  increaseTimer = () => {
    this.setState({ timer: this.state.timer + 1 })
  }

  componentDidMount () {
    this.timerHandle = setInterval(this.increaseTimer, 1000)
  }

  componentWillUnmount () {
    console.log('Clearing interval: ', this.timerHandle)
    clearInterval(this.timerHandle)
  }

  render () {
    return <h2>You've been on this page for {this.state.timer} seconds!<button onClick={this.props.hideTimeOnPage}>X</button></h2>
  }
}

export default TimeOnPage
