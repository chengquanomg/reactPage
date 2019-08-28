import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearching = this.onSearching.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  //搜索功能
  onInputChange(e) {
    const val = e.target.value;
    this.setState({
      inputValue: val,
    })
  }
  onSearching(){
    const inputValue = this.state.inputValue;
    this.props.onInputValueChange(inputValue);
    this.props.history.push(`/list?q=${inputValue}&p=1`)
  }

  onSearchClick(e){
    if(e.keyCode === 13){
      this.onSearching();
    }
  }


  componentDidMount(){
    window.addEventListener('keydown',this.onSearchClick)
  }
  componentWillUnmount(){
    window.removeEventListener('keydown',this.onSearchClick)
  }
  

  render(){
    // const val = this.state.inputValue;
    return (
      <div className={this.props.focused ? "put-in focused":"put-in"}>
          <input type="text" className="search" placeholder="Search..." 
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
          {/* <Link to={val?`/list?q=${val}&p=1`:"/list"} activeclassname='active' className="searching" onClick={this.onSearching}>
            <span className="iconfont icon-search">&#xe63c;</span>
          </Link> */}
      </div>
    )
  }
}

export default withRouter(Input);