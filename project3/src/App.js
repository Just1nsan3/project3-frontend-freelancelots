import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import Login from './Login';
import './App.css';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';


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
    <Route exact path="/" component = {Login}/>
    </Switch>
    </main>
  )
}
export default App;
