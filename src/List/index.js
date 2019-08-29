import React, { Component, Fragment } from 'react';
import Input from './input';
import TotalList from './TotalList';
import './index.css';
import '../font/font_icon/iconfont.css'

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      message : [],
      pageSize : 1,
      currentPage: 1,
      query: '',
    };
    this.onCurrentChange = this.onCurrentChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
  }

  //翻页功能,传入currentPage
  onCurrentChange(currentPage) {
    this.setState({
      currentPage,
    })
  }

  //传入message
  onMessageChange(message) {    
    this.setState({
      message,
    })
  }

  //搜索框内容改变,更新message
  onInputValueChange(inputValue) {
    this.pageChild.onCurrentPageChange(1); //传出currentPage 回到第一页
    this.messageChild.onMessage(inputValue); //得到搜索内容,更新message
    this.setState({
      query: inputValue,
      currentPage: 1,
    })
  }

  onLogOut() {
    window.sessionStorage.clear();
    window.location.href = '/';
  }

  getUrlData(){
    let url = window.location.search;  //url中?之后的部分
    url = url.substring(1);    //去掉?
    let dataObj = {};
    if(url.indexOf('&')>-1){
        url = url.split('&');
        for(let i=0; i<url.length; i++){
            let arr = url[i].split('=');
            dataObj[arr[0]] = arr[1];
        }
    }else{
        url = url.split('=');
        dataObj[url[0]]= url[1];
    }
    return dataObj;
  }

  //无用户信息回到首页 及初始化数据
  componentDidMount() {
    const arg = this.getUrlData();
    const query = arg.q?arg.q:"";
    const currentPage = arg.p?Number(arg.p):1;
    this.pageChild.onCurrentPageChange(currentPage);
    this.messageChild.onMessage(query);
    this.setState({
      currentPage,
      query,
    })
  }
  componentDidUpdate() {
    const {message, pageSize, currentPage} = this.state;
    let pageNum = Math.ceil(message.length/pageSize);
    this.pageChild.onPageNumChange(pageNum);
    let start = pageSize*(currentPage-1);  
    let end = pageSize*currentPage;
    this.messageChild.onChangeSE(start,end);
  }

  render(){
    let {query} = this.state; 
    return (
      <Fragment>
        <header className="home_header">
          <a href="/" className="home_logo">
            <svg className="octicon" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <div className="header-item">
            <Input 
              onCurrentChange = {this.onCurrentChange}
              onInputValueChange  = {this.onInputValueChange }
            />
            <div className="list_nav">
              <a className="nav_a" href="/">Home</a>
              <a className="nav_a" href="/list">List</a>
            </div>
          </div>
          <div className="home_logout" onClick={this.onLogOut.bind(this)}>登出</div>
        </header>
        
        <TotalList 
          query = {query}
          onCurrentChange = {this.onCurrentChange}
          onMessageChange = {this.onMessageChange}
          onRef={(ref)=>{ this.pageChild = ref}}
          onMessageRef={(ref)=>{ this.messageChild = ref}}
        />
      </Fragment>
    )
  }
}

export default List;
