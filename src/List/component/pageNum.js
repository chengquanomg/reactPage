import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class PageNum extends Component{
    constructor(props){
      super(props);
      this.state = {
        currentPage: 1,
        pageNumList: [],
        pageNum: 0,
      }
    }

    componentDidMount(){
      this.props.onRef(this);
    }

    onCurrentPageChange(currentPage) {
      this.setState({
        currentPage,
      })
    }

    onPageNumChange(pageNum) {
      let pageNumList = [];
      for (let i = 0; i < pageNum; i++){
        pageNumList.push(i+1);
      }
      this.setState({
        pageNum,
        pageNumList
      })
    }

    //上一页
    onLastPageClick(e){
      let currentPage = this.state.currentPage;
      if(currentPage<=1) {
        e.preventDefault();
        return;
      }
      currentPage = currentPage - 1;
      this.props.onCurrentChange(currentPage);
      this.setState({
        currentPage,
      })
    }
  
    //下一页
    onNextPageClick(e) {
      let {pageNum, currentPage} = this.state;
      if(currentPage>=pageNum) {
        e.preventDefault();
        return;
      }
      currentPage = currentPage + 1;
      this.props.onCurrentChange(currentPage);
      this.setState({
        currentPage,
      })
    }

    //切换数据分页
    onPageNumClick(num){
      this.props.onCurrentChange(num);
      this.setState({
        currentPage: num,
      })
    }

  render() {
    const {currentPage, pageNumList} = this.state;
    const { query} = this.props;
    const length = pageNumList.length;

    let pageArr = [];
    let max = 10;
    if(length <= max){
      pageArr = pageNumList;
    }else{
      if(currentPage < 5){
        pageArr = [...pageNumList.slice(0,5),'...',length];
      }else{
        if(currentPage <= length-4){
          pageArr = [1,'...',...pageNumList.slice(currentPage-2,currentPage+1),'...',length]
        }else{
          pageArr = [1,'...',...pageNumList.slice(length-5,length)]
        }
      }
    }



    return (
      length?(
        <div className="pageNum" style={{paddingLeft:(221 - length*17)}}>
        <Link to={currentPage<=1 ? ``:`/list?q=${query}&p=${currentPage-1}`} className={currentPage<=1 ? "lastPage disable":"lastPage"} onClick={this.onLastPageClick.bind(this)}>
          <span className="iconfont iconfont-last">&#xeb8e;</span>
        </Link>

        <ul className="numList">
          {pageArr.map((num,index)=>{
            return <Link to={`/list?q=${query}&p=${num}`} onClick={this.onPageNumClick.bind(this,num)} key={index} className={num === currentPage ? "current num" : "num"}>{num}</Link>
          })}
        </ul>

        <Link to={currentPage>=length ? ``:`/list?q=${query}&p=${currentPage+1}`} className={currentPage >= length ? "nextPage disable":"nextPage"} onClick={this.onNextPageClick.bind(this)}>
          <span className="iconfont iconfont-next">&#xeb8a;</span>
        </Link>
      </div>
      ):null
    )
  }
}
export default withRouter(PageNum);