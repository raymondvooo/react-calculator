import React, { Component } from "react";
import './Calculator.css';


export class Calculator extends Component {
  state = {
      input: 0,
      answer: 0,
  };


  render() {
    return (
        <div className="calc-container">
        <div className="row">
        <div id="input">{this.state.input}</div>
        </div>
        <div className="row">
          <div className="col">
          <button className="controls">AC</button>
          </div>
          <div className="col">
          <button className="controls">(</button>
          </div>
          <div className="col">
          <button className="controls">)</button>
          </div>   
          <div className="col">
          <button className="controls">+/-</button>
          </div>
          <div className="col">
          <button className="operators">/</button>
          </div>
        </div>
        
         <div className="row">
          <div className="col">
          <button className="other">sin</button>
          </div>
          <div className="col">
          <button className="numbers">7</button>
          </div>
          <div className="col">
          <button className="numbers">8</button>
          </div>
          <div className="col">
          <button className="numbers">9</button>
          </div>
          <div className="col">
          <button className="operators">*</button>
          </div>
        </div>

         <div className="row">
         <div className="col">
          <button className="other">cos</button>
          </div>
          <div className="col">
          <button className="numbers">4</button>
          </div>
          <div className="col">
          <button className="numbers">5</button>
          </div>
          <div className="col">
          <button className="numbers">6</button>
          </div>
          <div className="col">
          <button className="operators">-</button>
          </div>
        </div>
         <div className="row">
         <div className="col">
          <button className="other">tan</button>
          </div>
          <div className="col">
          <button className="numbers">1</button>
          </div>
          <div className="col">
          <button className="numbers">2</button>
          </div>
          <div className="col">
          <button className="numbers">3</button>
          </div>
          <div className="col">
          <button className="operators">+</button>
          </div>
        </div>

        <div className="row">
        <div className="col">
          <button className="other">π</button>
          </div>
          <div id="col-zero">
          <button className="numbers" id="zero">0</button>
          </div>
          <div className="col">
          <button className="numbers">.</button>
          </div>     
          <div className="col">
          <button className="operators">=</button>
          </div>
        </div>

        </div>
    );
  }
}

export default Calculator;