import React, { Component } from 'react';

class PageNum extends Component{
  render() {
    const length = this.props.pageNumList.length;
    return (
      <div className="pageNum" style={{paddingLeft:(221-length*17)}}>

        <div className={this.props.currentPage===1 ? "lastPage disable":"lastPage"} onClick={this.props.onLastPageClick}>
          <span className="iconfont-last">&#59031;</span>
        </div>

        <ul className="numList">
          {this.props.pageNumList.map((num,index)=>{
            return <li key={index} className={num === this.props.currentPage ? "current" : "default" } onClick={()=>this.props.onPageNumClick(num)}>{num}</li>
          })}
        </ul>

        <div className={this.props.currentPage===length ? "nextPage disable":"nextPage"} onClick={this.props.onNextPageClick}>
          <span className="iconfont-next">&#59047;</span>
        </div>
      </div>
    )
  }
}
export default PageNum;