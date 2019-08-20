import React, { Component } from 'react';

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue :'',
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  //搜索功能
  onInputChange(e) {
    const val = e.target.value;
    const messages = [...this.props.messages];
    let message = [];
    messages.forEach((item)=>{
      if(item.System.toLowerCase().includes(val.toLowerCase())) {
        message.push(item);
      }
      else if(item.Version.toLowerCase().includes(val.toLowerCase())) {
        message.push(item);
      }
      else if(item.Browser.toLowerCase().includes(val.toLowerCase())) {
        message.push(item);
      }
    })
    this.props.onCurrentChange(1);
    this.props.onMessageChange(message);
    this.setState({
      inputValue: val,
    })
  }

  render(){
    return (
      <div className={this.props.focused ? "put-in focused":"put-in"}>
          <input type="text" className="search" placeholder="Search..." 
            value={this.state.inputValue}
            onChange={this.onInputChange}
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