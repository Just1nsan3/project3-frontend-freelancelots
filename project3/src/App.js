import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer'
import Login from './Login';
// import Modal from './Modal';
import './index.css';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header'



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
        <Route exact path="/" component = {Login}/>
        <Route exact path="/photos" component={ PhotoContainer } />
        <Route component={My404} />

    </Switch>
    </main>
  )
}
export default App;
