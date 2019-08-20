import React, { Component } from 'react';
import './index.css'

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
        this.props.history.push('/home');
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
    if(window.sessionStorage.username){
      this.props.history.push('/home')
    }
  }

  componentWillUnmount(){
    window.removeEventListener('keydown',this.onEnterDown)
  }



  render(){
    return (
      <div className="group">
        <div className="logo"></div>
        <div className="usergroup">
          <label htmlFor="username" className="userpwd">username</label>
          <input type="text" id="username" onChange={this.onUsernameChange}/>
        </div>
        <div className="pwdgroup">
          <label htmlFor="password" className="userpwd">password</label>
          <input type="password" id="password" onChange={this.onPasswordChange}/>
        </div>
        <div className="btn">
          <div className="login" onClick={this.onLogin}>登录</div>
        </div>
      </div>
    )
  }
}



export default Login;