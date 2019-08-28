import React, { Component } from 'react';

class MessageList extends Component{
  constructor(props){
    super(props);
    this.state = {
      messages : 
      [{System:"Windows", Version:"9.70", Browser:"Opera"},
      {System:"Linux", Version:"11.0", Browser:"Chrome"},
      {System:"Windows", Version:"14.14", Browser:"Edge"},
      {System:"Windows", Version:"9.80", Browser:"Opera"},
      {System:"Linux", Version:"5.0", Browser:"Mozilla"},
      {System:"Windows", Version:"532.5", Browser:"Safari"},
      {System:"Windows", Version:"532.5", Browser:"Safari"},
      {System:"Linux", Version:"5.0", Browser:"Mozilla"},
      {System:"Windows", Version:"9.80", Browser:"Opera"},
      {System:"Windows", Version:"14.14", Browser:"Edge"},
      {System:"Linux", Version:"11.0", Browser:"Chrome"},
      {System:"Windows", Version:"9.70", Browser:"Opera"}],
      message: [],
      start: 0,
      end: 0,
    }
    this.onChangeSE = this.onChangeSE.bind(this);
  }

  getMessage(messages, query) {
    let message = []
    messages.forEach((item)=>{
      if(item.System.toLowerCase().includes(query.toLowerCase())) {
        message.push(item);
      }
      else if(item.Version.toLowerCase().includes(query.toLowerCase())) {
        message.push(item);
      }
      else if(item.Browser.toLowerCase().includes(query.toLowerCase())) {
        message.push(item);
      }
    })
    return message;
  }
  onChangeSE(start,end) {
    this.setState({
      start,
      end,
    })
  }

  onMessage(query) {
    let messages = this.state.messages;
    let message = this.getMessage(messages, query);
    this.props.onMessageChange(message);
    this.setState({
      message,
    })
  }

  componentDidMount() {
    this.props.onMessageRef(this);
    let messages = this.state.messages;
    this.setState({
      message: messages,
    })
  }

  render() {
    let {message, start, end} = this.state;
    message =  message.slice(start, end);
    return (
      message.length?(<ul>
        {message.map((item,index)=>{
          return (
            <li key={index} className="itemList">
              <h3>{item.Browser}</h3>
              <p>{item.Version}</p>
              <p>{item.System}</p>
            </li>
          )
        })}
      </ul>):(<h2 className="notfound">couldn’t find anythings matching</h2>)
    )
  }
}
export default MessageList;
