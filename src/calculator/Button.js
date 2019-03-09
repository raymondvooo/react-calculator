import React, { Component } from "react";
class Button extends Component {

render () {
    return(
      //calculator button, this.props.children = button's value
      <button 
      className={this.props.className} 
      onClick={() => this.props.handleClick(this.props.children)}>
      {this.props.children}
      </button>  
    )
}
}

export default Button;