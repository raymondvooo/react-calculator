import React, { Component } from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Calculator App
        </header>
        <div className="calc-container">
        <div className="row">
          <button className="controls">AC</button>
          <button className="controls">(</button>
          <button className="controls">)</button>
          <button className="controls">+/-</button>
          <button className="operators">/</button>
        </div>
         <div className="row">
          <button>sin</button>
          <button className="numbers">7</button>
          <button className="numbers">8</button>
          <button className="numbers">9</button>
          <button className="operators">*</button>
        </div>
         <div className="row">
          <button>cos</button>
          <button className="numbers">4</button>
          <button className="numbers">5</button>
          <button className="numbers">6</button>
          <button className="operators">-</button>
        </div>
         <div className="row">
          <button>tan</button>
          <button className="numbers">1</button>
          <button className="numbers">2</button>
          <button className="numbers">3</button>
          <button className="operators">+</button>
        </div>
        <div className="row">
          <button>π</button>
          <button className="numbers" id="zero">0</button>
          <button className="numbers">.</button>
          <button className="operators">=</button>
        </div>
        
        
        </div>

      </div>
    );
  }
}

export default App;
