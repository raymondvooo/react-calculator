import React, { Component } from "react";
import logo from '../logo.svg';
import './Calculator.css';
import Button from './Button'

export class Calculator extends Component {
    state = {
        input: "",
        equationSolved: false,        
    };
/**
 * detects value of button pressed and adds it to the equation on the calculator
 */
    addToInput = val => {
        if (this.state.equationSolved === false) {
        if (val === "(") {
            //prevents the entering of a '(' after an ')' or a '.'
            if (this.state.input[this.state.input.length - 1] !== ")" && this.state.input[this.state.input.length - 1] !== ".") {
                this.setState({
                    input: this.state.input + val
                })
            }
        } else if (val === ")") {
            //only allows entering a ')' if a '(' has already been inputted
            if (this.state.input.indexOf("(") >= 0) {
                this.setState({
                    input: this.state.input + val
                })
            }
            //checks if current equation = "0", if it does, then input replaces the 0.
        } else if (this.state.input == "0") {
            this.setState({
                input: val
            })
        } else
            this.setState({
                input: this.state.input + val,
            })
        }
        else {
            alert("Please clear the calculator before proceeding");
        }
    }

    addDecimal = val => {
        if (this.state.equationSolved === false) {
            //prevents double decimals and decimals right after ')'
        if (this.state.input.charAt(this.state.input.length - 1) !== "." && this.state.input.charAt(this.state.input.length - 1) !== ")") {
            this.setState({
                input: this.state.input + val
            })
        }
    } else {
        alert("Please clear the calculator before proceeding");
    }
    }

    clearInput = val => {
        this.setState({
            input: "",
            equationSolved: false,
        })
    }
    /**
     * handles trig functions. calculator computes the input first and after promise changes state,
     * calculator performs the trig function on the result
     */
    trigFunction = val => {
        let computePromise = new Promise((resolve, reject) => {
            this.compute();
            resolve();
        });
        computePromise.then(() => {
            console.log("trig func started", this.state.input)
            if (!isNaN(this.state.input)) {
                if (val === "sin") {
                    this.setState({
                        input: Math.sin(this.state.input)
                    })
                } else if (val === "cos") {
                    this.setState({
                        input: Math.cos(this.state.input)
                    })
                } else if (val === "tan") {
                    this.setState({
                        input: Math.tan(this.state.input)
                    })
                }
            }
        })
    }

    compute = () => {
        if (this.state.equationSolved === false) {
        let opStack = [];
        let postfixStack = [];
        let resultStack = [];

        this.toPostfix(opStack, postfixStack);
        while (postfixStack.length > 0) {
            //if number, then push onto result stack
            if (!isNaN(postfixStack[0])) {
                resultStack.push(parseFloat(postfixStack.shift()))
                console.log("resultstack", resultStack);
            } else {
                //performs operation based off of result/operator stack
                let op1 = resultStack.pop();
                let op2 = resultStack.pop();
                if (postfixStack[0] === "+") {
                    resultStack.push(op2 + op1);
                } else if (postfixStack[0] === "-") {
                    resultStack.push(op2 - op1);
                } else if (postfixStack[0] === "*") {
                    resultStack.push(op2 * op1);
                } else if (postfixStack[0] === "/") {
                    resultStack.push(op2 / op1)
                }
                postfixStack.shift();
                console.log("answer", resultStack)
            }
        }
        this.setState({
            input: resultStack[0].toPrecision(12),
            equationSolved: true,
        });
    }
    }
/**
 * converts input into postfix notation
 */
    toPostfix = (opStack, postfixStack) => {
        for (let i = 0; i < this.state.input.length; i++) {
            let character = "";
            //checks for multidigit input and iterates through, parsing into one value
            if (this.state.input.charAt(i) === "." || (this.state.input.charAt(i) >= "0" && this.state.input.charAt(i) <= "9")) {
                while (this.state.input.charAt(i) === "." || (this.state.input.charAt(i) >= "0" && this.state.input.charAt(i) <= "9")) {
                    character = character + this.state.input.charAt(i);
                    i++;
                }
                postfixStack.push(character);
                console.log("postfix", postfixStack);
            }
            character = this.state.input.charAt(i);
            //when '(' encountered, push it on stack
            if (character === "(") {
                opStack.push(character);
            } 
            //if ')', pop operators into postfix queue until '(' encountered
            else if (character === ")") {
                while (opStack[opStack.length-1] !== "(" && opStack.length > 0) {
                    postfixStack.push(opStack.pop());
                }
                if (opStack[opStack.length-1] === "(") {
                    opStack.pop();
                }
            }
            //checks for operator in infix expression and pops operators from stack based on priority of operator
             else if (character === "+" || character === "-") {
                while (opStack.length > 0 && opStack[opStack.length-1] !== "(") {
                    postfixStack.push(opStack.pop())
                }
                opStack.push(character);
            } else if (character === "*" || character === "/") {
                if (opStack.length === 0 || opStack[opStack.length-1] === "+" || opStack[opStack.length-1] === "-" || opStack[opStack.length-1] === "(") {
                    opStack.push(character);
                } else {
                    while (opStack.length > 0 && opStack[opStack.length-1] !== "(") {
                        postfixStack.push(opStack.pop())
                    }
                    opStack.push(character);
                }
            }
        }
        while (opStack.length > 0) {
            postfixStack.push(opStack.pop());
        }
        console.log(postfixStack);
    }

  render() {
    return (
        <div className="calc-container">
        <div className="row">
        <div id="input">{this.state.input}</div>
        </div>
        <div className="row">
          <div className="col-zero">
          <Button className="controls" handleClick={this.clearInput}>Clear</Button>
          </div>
          <div className="col">
          <Button className="controls" handleClick={this.addToInput}>(</Button>
          </div>
          <div className="col">
          <Button className="controls" handleClick={this.addToInput}>)</Button>
          </div>   
          <div className="col">
          <Button className="operators" handleClick={this.addToInput}>/</Button>
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
          <Button className="operators" handleClick={this.addToInput}>*</Button>
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
          <Button className="operators" handleClick={this.addToInput}>-</Button>
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
          <Button className="operators" handleClick={this.addToInput}>+</Button>
          </div>
        </div>

        <div className="row">
        <div className="col">
        <img src={logo} className="App-logo" alt="logo" />          
        </div>
          <div className="col-zero">
          <Button className="numbers" handleClick={this.addToInput}>0</Button>
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