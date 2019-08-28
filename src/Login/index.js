import React, { Component, Fragment } from 'react';
import './index.css'
import {withRouter} from "react-router-dom";

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      users : [{username:"01",password:"111"},
               {username:"02",password:"222"},
               {username:"03",password:"333"}],
      username: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
    this.onEnterDown = this.onEnterDown.bind(this);
    this.onUsernameChange =  this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }


  //用户登陆
  onLogin(){
    let {username, password, users} = this.state;
    let confirm = false;
    users.forEach((item)=>{
      if (item.username === username && item.password === password) {
        confirm = true;
        window.sessionStorage.setItem("username", username);
        window.location.href = "/"
        return;
      }
    })
    if (confirm === false) alert("登陆失败,请检查用户名或密码!")
    
  }

  //记录username
  onUsernameChange(e){
    let val = e.target.value;
    this.setState({
      username: val,
    })
  }

  //记录password
  onPasswordChange(e){
    let val = e.target.value;
    this.setState({
      password: val,
    })
  }

  onEnterDown(e){
    if (e.keyCode === 13) this.onLogin();
  }

  //键盘事件  有用户信息跳转至home
  componentDidMount(){
    window.addEventListener('keydown',this.onEnterDown);
  }

  componentWillUnmount(){
    window.removeEventListener('keydown',this.onEnterDown)
  }

  render(){
    return (
      <Fragment>
        <header className="home_header">
            <a href="/home" className="home_logo">
              <svg className="octicon" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
            <div className="home_nav">
              <a className="nav_a" href="/">Home</a>
              <a className="nav_a" href="/list">List</a>
            </div>
            
          </header>
        <div className="main">
          <div className="content">
            <div className="context">
              <h1>Built for Sansi</h1>
              <p>Built for Sansi/Built for Sansi/Built for Sansi</p>
            </div>
            <div className="group">
              <div className="usergroup">
                <label htmlFor="username" className="userpwd">Username</label>
                <input type="text" id="username" onChange={this.onUsernameChange}/>
              </div>
              <div className="pwdgroup">
                <label htmlFor="password" className="userpwd">Password</label>
                <input type="password" id="password" onChange={this.onPasswordChange}/>
              </div>
              <div className="login" onClick={this.onLogin}>Sign in</div>
            </div>
          </div>
        </div>

        <div className="end">
          <h2>Get started with GitHub Enterprise</h2>
          <p>Take collaboration to the next level with security and administrative features built for businesses.</p>
        </div>
      </Fragment>
    )
  }
}



export default withRouter(Login);