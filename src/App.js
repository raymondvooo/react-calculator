import React, { Component } from 'react';
import './App.css';
import Calculator from './calculator/Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Calculator App
        </header>
        <Calculator />

      </div>
    );
  }
}

export default App;
