import React, { Component } from 'react';

class PageNum extends Component{
    //上一页
    onLastPageClick(){
      const currentPage = this.props.currentPage===1 ? this.props.currentPage : this.props.currentPage - 1;
      this.props.onCurrentChange(currentPage);
    }
  
    //下一页
    onNextPageClick() {
      const {pageSize, messages} = this.props;
      const currentPage = this.props.currentPage===Math.ceil(messages.length/pageSize) ? this.props.currentPage : this.props.currentPage + 1;
      this.props.onCurrentChange(currentPage);
    }

    //切换数据分页
    onPageNumClick(num){
      this.props.onCurrentChange(num);
    }

  render() {
    const length = this.props.pageNumList.length;
    return (
      <div className="pageNum" style={{paddingLeft:(221 - length*17)}}>

        <div className={this.props.currentPage===1 ? "lastPage disable":"lastPage"} onClick={this.onLastPageClick.bind(this)}>
          <span className="iconfont-last">&#59031;</span>
        </div>

        <ul className="numList">
          {this.props.pageNumList.map((num,index)=>{
            return <li key={index} className={num === this.props.currentPage ? "current" : null } onClick={this.onPageNumClick.bind(this,num)}>{num}</li>
          })}
        </ul>

        <div className={this.props.currentPage === length ? "nextPage disable":"nextPage"} onClick={this.onNextPageClick.bind(this)}>
          <span className="iconfont-next">&#59047;</span>
        </div>
      </div>
    )
  }
}
export default PageNum;