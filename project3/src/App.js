import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer'
import Login from './Login';
// import Modal from './Modal';
import './index.css';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Header'
import Freelancer from './Freelancer'
import LocationContainer from './LocationContainer'
import MapContainer from './MapContainer'



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
    <div>
    <Switch>
        <Route exact path="/" component = {Login}/>
        <Route exact path="/photos" component={ PhotoContainer } />
        <Route exact path="/freelancer" component={ Freelancer } />
        <Route exact path="/location" component={ LocationContainer } />
        <Route component={My404} />
        <LocationContainer />

    </Switch>
    </div>
    </main>
  )
}

export default App;
