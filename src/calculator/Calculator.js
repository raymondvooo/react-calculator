import React, { Component } from "react";
import './Calculator.css';
import Button from './Button'

export class Calculator extends Component {
  state = {
      input: "",
      prevInput: "",
      operator: "-"
  };

  addToInput = val => {
      this.setState({input: this.state.input + val})
  }

  clearInput = val => {
      this.setState({
          input: ""
      })
  }

  operate = val => {
    this.state.operator = val;
    this.state.prevInput = this.state.input;
    this.setState({
        input: ""
    });
   }

  compute = () => {
    if (this.state.operator === "+") {
        this.setState({
            input: parseInt(this.state.input) + parseInt(this.state.prevInput)
        })
        console.log("added")
    }
    else if (this.state.operator === "-") {
        this.setState({
            input: parseInt(this.state.input) - parseInt(this.state.prevInput)
        })
    }
    else if (this.state.operator === "*") {
        this.setState({
            input: parseInt(this.state.input) * parseInt(this.state.prevInput)
        })
    }
    else if (this.state.operator === "/") {
        this.setState({
            input: parseInt(this.state.input) / parseInt(this.state.prevInput)
        })
    }
  }

  render() {
    return (
        <div className="calc-container">
        <div className="row">
        <div id="input">{this.state.input}</div>
        </div>
        <div className="row">
          <div className="col">
          <Button className="controls" handleClick={this.clearInput}>AC</Button>
          </div>
          <div className="col">
          <Button className="controls">(</Button>
          </div>
          <div className="col">
          <Button className="controls">)</Button>
          </div>   
          <div className="col">
          <Button className="controls">+/-</Button>
          </div>
          <div className="col">
          <Button className="operators" handleClick={this.operate}>/</Button>
          </div>
        </div>
        
         <div className="row">
          <div className="col">
          <Button className="other">sin</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>7</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>8</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>9</Button>
          </div>
          <div className="col">
          <Button className="operators" handleClick={this.operate}>*</Button>
          </div>
        </div>

         <div className="row">
         <div className="col">
          <Button className="other">cos</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>4</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>5</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>6</Button>
          </div>
          <div className="col">
          <Button className="operators" handleClick={this.operate}>-</Button>
          </div>
        </div>
         <div className="row">
         <div className="col">
          <Button className="other">tan</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>1</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>2</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>3</Button>
          </div>
          <div className="col">
          <Button className="operators" handleClick={this.operate}>+</Button>
          </div>
        </div>

        <div className="row">
        <div className="col">
          <Button className="other">π</Button>
          </div>
          <div id="col-zero">
          <Button className="numbers" id="zero" handleClick={this.addToInput}>0</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addToInput}>.</Button>
          </div>     
          <div className="col">
          <Button className="operators" handleClick={this.compute}>=</Button>
          </div>
        </div>

        </div>
    );
  }
}

export default Calculator;