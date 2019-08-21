import React, { Component, Fragment } from 'react';
import Input from './input';
import TotalList from './TotalList';
import './index.css';
import '../font/font_search/iconfont.css';
import '../font/font_left/iconfont.css';
import '../font/font_right/iconfont.css';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      messages : 
      [{System:"Windows", Version:"9.70", Browser:"Opera"},
      {System:"Linux", Version:"11.0", Browser:"Chrome"},
      {System:"Windows", Version:"14.14", Browser:"Edge"},
      {System:"Windows", Version:"9.80", Browser:"Opera"},
      {System:"Linux", Version:"5.0", Browser:"Mozilla"},
      {System:"Windows", Version:"532.5", Browser:"Safari"}],
      message : '',
      pageSize : 4,
      currentPage: 1,
      focused: false,
    };
    this.onCurrentChange = this.onCurrentChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
  }

  //翻页功能,更新currentPage
  onCurrentChange(currentPage) {
    this.setState({
      currentPage,
    })
  }

  //搜索框内容改变,更新message
  onMessageChange(message) {
    this.setState({
      message,
    })
  }
  

  //样式
  onInputFocus() {
    this.setState({
      focused: true,
    })
  }
  onInputBlur() {
    this.setState({
      focused: false,
    })
  }

  //无用户信息回到首页 及初始化数据
  componentDidMount() {
    if(!window.sessionStorage.username){
      this.props.history.push('/')
    }
    
    let messages = [...this.state.messages];
    if(window.sessionStorage.class){
      let className = window.sessionStorage.class;
      if(className.includes("aixin")){
        messages.splice(0,2);
      }else if(className.includes("dianzan")){
        messages.splice(4,2);
      }
    }
    this.setState({
      messages,
      message: messages,
    })
  }


  render(){
    var pageNumList = [];
    const {pageSize, currentPage, message} = this.state;
    const pageNum = Math.ceil(message.length/pageSize);
    for (let i = 0; i < pageNum; i++){
      pageNumList.push(i+1);
    }
    
    return (
      <Fragment>
        <Input 
          focused = {this.state.focused}
          messages = {this.state.messages}
          onCurrentChange = {this.onCurrentChange}
          onMessageChange = {this.onMessageChange}
          onInputFocus = {this.onInputFocus}
          onInputBlur = {this.onInputBlur}
        />
        <TotalList 
          messages = {this.state.messages}
          message = {message}
          pageSize = {pageSize}
          currentPage = {currentPage}
          pageNumList = {pageNumList}
          onCurrentChange = {this.onCurrentChange}
        />
      </Fragment>
    )
  }
}

export default List;