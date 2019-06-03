import React from 'react'
import Navbar from './Navbar'
import PaintingList from './components/PaintingList'

const App = () =>
  <div className="App">
    <Navbar
      header="My paintings app!"
      subHeader="Having fun with react props!"
      colour="red"
      icon="react"
    />
    <PaintingList />
  </div>

export default App
