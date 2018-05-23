import React, { Component } from 'react'
import Header from './components/Header'
import Categories from './components/categories/Categories'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
      </div>
    )
  }
}

export default App
