import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/index';
import Home from './Home/index'
import List from './List/index'
import { Router, Route } from 'react-router';
import {createHashHistory} from 'history';
import * as serviceWorker from './serviceWorker';

const browserHistory = createHashHistory()
ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={Login}/>
    <Route path="/home" component={Home}/>
    <Route path="/list" component={List}/>
  </Router>
  , document.getElementById('root'));
serviceWorker.unregister();
