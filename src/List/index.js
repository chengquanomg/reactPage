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
      inputValue: '',
      focused: false,
    };
    this.onPageNumClick = this.onPageNumClick.bind(this);
    this.onLastPageClick = this.onLastPageClick.bind(this);
    this.onNextPageClick = this.onNextPageClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
  }

  //切换数据分页
  onPageNumClick(num){
    this.setState({
      currentPage: num,
    })
  }

  //上一页
  onLastPageClick(e){
    const currentPage = this.state.currentPage===1 ? this.state.currentPage : this.state.currentPage - 1;
    this.setState({
      currentPage,
    })
  }

  //下一页
  onNextPageClick() {
    const {pageSize, messages} = this.state;
    const currentPage = this.state.currentPage===Math.ceil(messages.length/pageSize) ? this.state.currentPage : this.state.currentPage + 1;
    this.setState({
      currentPage,
    })
  }

  //搜索功能
  onInputChange(e) {
    const val = e.target.value;
    const messages = [...this.state.messages];
    let message = [];
    messages.forEach((item)=>{
      if(item.System.toLowerCase().includes(val)) {
        message.push(item);
      }
      else if(item.Version.toLowerCase().includes(val)) {
        message.push(item);
      }
      else if(item.Browser.toLowerCase().includes(val)) {
        message.push(item);
      }
    })
    this.setState({
      inputValue: val,
      message,
      currentPage: 1,
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

  //无用户信息回到首页
  componentDidMount() {
    if(!window.sessionStorage.username){
      this.props.history.push('/')
    }
  }

  //初始化数据
  UNSAFE_componentWillMount() {
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
          inputValue = {this.state.inputValue}
          onInputChange = {this.onInputChange}
          onInputFocus = {this.onInputFocus}
          onInputBlur = {this.onInputBlur}
        />
        <TotalList 
          message = {message}
          pageSize = {pageSize}
          currentPage = {currentPage}
          pageNumList = {pageNumList}
          onLastPageClick = {this.onLastPageClick}
          onPageNumClick = {this.onPageNumClick}
          onNextPageClick = {this.onNextPageClick}
        />
      </Fragment>
    )
  }
}

export default List;