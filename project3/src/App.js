import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';


const My404 = () => {
  return (
    <div>
      Something went wrong bud.
    </div>

  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route component={My404} />
      </Switch>
    </main> 
  )
}

export default App;
