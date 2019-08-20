import React, { Component } from 'react';

class Input extends Component{
  render(){
    return (
      <div className={this.props.focused ? "put-in focused":"put-in"}>
          <input type="text" className="search" placeholder="Search..." 
            value={this.props.inputValue}
            onChange={this.props.onInputChange}
            onFocus={this.props.onInputFocus}
            onBlur={this.props.onInputBlur}
          />
          <div className="icon">
            <span className="iconfonts icon-search">&#58880;</span>
          </div>
      </div>
    )
  }
}

export default Input;