import React, { Component } from 'react';
import PageNum from './component/pageNum';
import MessageList from './component/messageList'

class TotalList extends Component {
  render() {
    const { query} = this.props;
    return (
      <div className="list">
          <MessageList 
            query = {query}
            onMessageChange = {this.props.onMessageChange}
            onMessageRef = {this.props.onMessageRef}
          />

          <PageNum 
            query = {query}
            onCurrentChange = {this.props.onCurrentChange}
            onRef = {this.props.onRef}
          />
        </div>
    )
  }
}

export default TotalList;