import React, { Component } from 'react';
import '../font/font_list/iconfont.css';
import '../font/font_aixin/iconfont.css';
import '../font/font_dianzan/iconfont.css';
import '../font/font_down/iconfont.css';
import '../font/font_up/iconfont.css';
import './index.css';

class Home extends Component{

  //拖拽功能实现
  onListClick(e){
    //this.props.history.push('/list')
    let _this = this;  //记录this 后面环境改变
    let className = e.currentTarget.className; //list页面分割数据用
    let drag = e.currentTarget; 
    let dragStyle = window.getComputedStyle(drag, null)
    let offsetX = parseInt(dragStyle.left); //获取图标当前的坐标
    let offsetY = parseInt(dragStyle.top); //获取图标当前的坐标
    let innerX = e.clientX - offsetX; //获取鼠标在图标内的坐标
    let innerY = e.clientY - offsetY; //获取鼠标在图标内的坐标
    let x=0,y=0;                    //x y记录偏移量
    document.onmousemove = function(e) {
      x = e.clientX - innerX;
      y = e.clientY - innerY;
      if (x === offsetX && y === offsetY){
        x = 0;y = 0;
        return;
      }
      drag.style.top = y + 'px';
      drag.style.left = x + 'px';
    }
    document.onmouseup = function() {
      document.onmousemove = null;
      console.log()
      if (x === 0 && y === 0){
        window.sessionStorage.setItem("class",className)
        _this.props.history.push('/list');
        document.onmouseup = null;
        return;
      }
      
    }
  }


  //登出功能
  onLogOut() {
    window.sessionStorage.clear()
    this.props.history.push('/');
  }

  //显示菜单并改变图标
  onDownClick(e) {
    let down = e.currentTarget;
    let icon = down.children[0];
    document.getElementsByClassName("menu")[0].classList.toggle("show");
    if (icon.className.includes("down")){
      icon.className = "iconfont-up";
      icon.innerHTML = "&#59538;";
    }else {
      icon.className = "iconfont-down";
      icon.innerHTML = "&#59518;";
    }
  }

  //窗口点击让菜单消失
  show(e){
    let menu = document.getElementsByClassName("menu")[0];
    let down = document.getElementsByClassName("down")[0];
    let icon = down.children[0];
    if (e.target.className !== 'down' && !e.target.className.includes('icon')){
      if (menu.className.includes("show")){
        menu.classList.remove("show");
        icon.className = "iconfont-down";
        icon.innerHTML = "&#59518;";
      }
    }
  }

  //无用户信息回到首页
  componentDidMount() {
    if(!window.sessionStorage.username){
      this.props.history.push('/');
    }
    window.addEventListener('click',this.show);
  }

  componentWillUnmount() {
    window.removeEventListener('click',this.show);
  }
  

  render(){
    return (
      <div className="home">
        
        <div className="nav">
          <div className="down" onClick={this.onDownClick.bind(this)}>
            {/* up:&#59538; down:&#59518; */}
            <span className="iconfont iconfont-down">&#59518;</span>
          </div>
          <div className="menu" style={{display:"none"}}>
            <div className="logout" onClick={this.onLogOut.bind(this)}>登出</div>
          </div>
        </div>


        <div className="icon-svg icon-list"  onMouseDown={this.onListClick.bind(this)}>
          <span className="iconfont icon-list">&#59039;</span>
        </div>
        <div className="icon-svg icon-aixin" onMouseDown={this.onListClick.bind(this)}>
          <span className="iconfont icon-aixin">&#59506;</span>
        </div>
        <div className="icon-svg icon-dianzan" onMouseDown={this.onListClick.bind(this)}>
          <span className="iconfont icon-dianzan">&#59507;</span>
        </div>
      </div>
    )
  }
}

export default Home;