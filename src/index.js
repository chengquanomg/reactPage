import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/index';
import Home from './Home/index'
import List from './List/index'
import { Router, Route, Redirect, Switch } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import * as serviceWorker from './serviceWorker';

const browserHistory = createBrowserHistory()
const loggedin = !!window.sessionStorage.username;
// const pathname = window.location.pathname;
ReactDOM.render(
  (loggedin ?
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/list/*" component={List}/>
        <Route path="/list" component={List}/>
        <Redirect from="/*" to="/"></Redirect>
      </Switch>
    </Router>:
    <Router history={browserHistory}>
      <Route exact  path="/login" component={Login}/>
      <Redirect to="/login" />
    </Router>)
  , document.getElementById('root'));
serviceWorker.unregister();
