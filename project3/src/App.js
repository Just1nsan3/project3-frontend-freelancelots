import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import Login from './Login';
// import Modal from './Modal';
import './index.css';


const My404 = () => {
  return(
    <div>
    Whoops, page not found.
    </div>
  )
}

const App = () => {
  return(
    <main>
    <Switch>
    <button>
    <Route exact path="/" component = {Login}/>
    </button>
    </Switch>
    </main>
  )
}
export default App;
