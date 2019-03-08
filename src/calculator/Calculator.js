import React, { Component } from "react";
import logo from '../logo.svg';
import './Calculator.css';
import Button from './Button'

export class Calculator extends Component {
    state = {
        input: "",
        prevNum: "",
        currentNum: "",
        operator: "-"
    };

    addToInput = val => {
        if (!isNaN(this.state.input) || this.state.input === ".") {
            if (this.state.input === "0") {
                this.setState({
                    input: val
                })
            } else
            this.setState({
                input: this.state.input + val,
            })
        }
    }
    addZero = val => {
        if (!isNaN(this.state.input)) {
            if (this.state.input !== "") {
                this.setState({
                    input: this.state.input + val
                });
            }
        }
    }
    addDecimal = val => {
        if (!isNaN(this.state.input)) {
            if (this.state.input.indexOf(".") === -1) {
                this.setState({
                    input: this.state.input + val
                })
            }
        }
    }

    clearInput = val => {
        this.setState({
            input: ""
        })
    }

    plusMinus = () => {
        if (this.state.input > 0) {
            this.setState({
                input: -Math.abs(this.state.input)
            })
        } else if (this.state.input < 0) {
            this.setState({
                input: Math.abs(this.state.input)
            })
        }
    }

    trigFunction = val => {
        if (!isNaN(this.state.input) || this.state.input === ".") {
            if (val === "sin") {
                this.setState({
                    input: Math.sin(parseInt(this.state.input))
                })
            } else if (val === "cos") {
                this.setState({
                    input: Math.cos(parseInt(this.state.input))
                })
            } else if (val === "tan") {
                this.setState({
                    input: Math.tan(parseInt(this.state.input))
                })
            }
        }
    }

    operate = val => {
        if (!isNaN(this.state.input)) {
            this.state.prevNum = this.state.input;
            this.state.operator = val;
            this.setState({
                input: ""
            });
        }
    }

    compute = () => {
        this.state.currentNum = this.state.input;
        if (this.state.operator === "+") {
            this.setState({
                input: parseInt(this.state.prevNum) + parseInt(this.state.currentNum),
            })
        } else if (this.state.operator === "-") {
            this.setState({
                input: parseInt(this.state.prevNum) - parseInt(this.state.currentNum)
            })

        } else if (this.state.operator === "*") {
            this.setState({
                input: parseInt(this.state.prevNum) * parseInt(this.state.currentNum)
            })
        } else if (this.state.operator === "/") {
            this.setState({
                input: parseInt(this.state.prevNum) / parseInt(this.state.input)
            })
        }
        console.log(this.state.prevNum, this.state.currentNum)

    }

  render() {
    return (
        <div className="calc-container">
        <div className="row">
        <div id="input">{this.state.input}</div>
        </div>
        <div className="row">
          <div className="col">
          <Button className="controls" handleClick={this.clearInput}>C</Button>
          </div>
          <div className="col">
          <Button className="controls">(</Button>
          </div>
          <div className="col">
          <Button className="controls">)</Button>
          </div>   
          <div className="col">
          <Button className="controls" handleClick={this.plusMinus}>+/-</Button>
          </div>
          <div className="col">
          <Button className="operators" handleClick={this.operate}>/</Button>
          </div>
        </div>
        
         <div className="row">
          <div className="col">
          <Button className="other" handleClick={this.trigFunction}>sin</Button>
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
          <Button className="other" handleClick={this.trigFunction}>cos</Button>
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
          <Button className="other" handleClick={this.trigFunction}>tan</Button>
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
        <img src={logo} className="App-logo" alt="logo" />          
        </div>
          <div id="col-zero">
          <Button className="numbers" id="zero" handleClick={this.addToInput}>0</Button>
          </div>
          <div className="col">
          <Button className="numbers" handleClick={this.addDecimal}>.</Button>
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