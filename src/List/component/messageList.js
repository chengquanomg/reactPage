import React, { Component } from 'react';

class MessageList extends Component{
  render() {
    const {message, pageSize, currentPage} = this.props;
    console.log(message)
    return (
      <table border="0" cellPadding="0" cellSpacing="0" className="table">
        <thead>
          <tr>
            <th>System</th>
            <th>Version</th>
            <th>Browser</th>
          </tr>
        </thead>
        <tbody>
          {message.length ? message.slice(pageSize*(currentPage-1), pageSize*currentPage).map((item,index)=>{
            return (
              <tr key={index}>
                <td>{item.System}</td>
                <td>{item.Version}</td>
                <td>{item.Browser}</td>
              </tr>
            )
          }):null}
        </tbody>
      </table>
    )
  }
}
export default MessageList;
