import React, { Component } from 'react';
import PageNum from './component/pageNum';
import MessageList from './component/messageList'

class TotalList extends Component {
  render() {
    const {message, pageSize, currentPage, pageNumList} = this.props;
    return (
      <div className="list">
          <MessageList 
            message = {message}
            pageSize = {pageSize}
            currentPage = {currentPage}
          />

          <PageNum 
            pageNumList = {pageNumList}
            currentPage = {currentPage}
            onLastPageClick = {this.props.onLastPageClick}
            onPageNumClick = {this.props.onPageNumClick}
            onNextPageClick = {this.props.onNextPageClick}
          />
        </div>
    )
  }
}

export default TotalList;