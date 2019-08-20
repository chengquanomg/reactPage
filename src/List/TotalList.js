import React, { Component } from 'react';
import PageNum from './component/pageNum';
import MessageList from './component/messageList'

class TotalList extends Component {
  render() {
    const {messages, message, pageSize, currentPage, pageNumList} = this.props;
    return (
      <div className="list">
          <MessageList 
            message = {message}
            pageSize = {pageSize}
            currentPage = {currentPage}
          />

          <PageNum 
            pageNumList = {pageNumList}
            pageSize = {pageSize}
            currentPage = {currentPage}
            messages = {messages}
            onCurrentChange = {this.props.onCurrentChange}
          />
        </div>
    )
  }
}

export default TotalList;