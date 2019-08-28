import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Drag extends Component{
  constructor(props){
    super(props);
    this.state = {
      x:461,
      y:150,
    }
    this.disx = 0;
    this.disy = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  onListClick(e){
    this.disx = e.clientX - e.currentTarget.offsetLeft;
    this.disy = e.clientY - e.currentTarget.offsetTop;
    this.offsetX = e.currentTarget.offsetLeft;
    this.offsetY = e.currentTarget.offsetTop;
    document.onmousemove = this.fnMove.bind(this);
    document.onmouseup = this.fnUp.bind(this);
  }
  fnMove(e){
    const x = this.props.x;
    this.setState({
      x: e.clientX - this.disx - x,
      y: e.clientY - this.disy,
    })
  }
  fnUp(){
    const {x, y} = this.state;
    const Px = this.props.x;
    document.onmousemove = null;
    if(x === this.offsetX - Px && y === this.offsetY){
      this.props.history.push('./list')
    }
    document.onmouseup = null;
  }
  render(){
    return (
      <div className="icon-svg"  onMouseDown={this.onListClick.bind(this)} style={{top:this.state.y,left:this.state.x+this.props.x}}>
        <span className="iconfont icon-icon">{this.props.icon}</span>
      </div>
    )
  }
}

export default withRouter(Drag);