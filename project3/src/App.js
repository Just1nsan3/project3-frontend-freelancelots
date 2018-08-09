import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import LocationContainer from './LocationContainer'
import PhotoContainer from './PhotoContainer'
import Freelancer from './Freelancer';
import Header from './Header'
import Search from './Search';
import Login from './Login';
import Modal from './Modal';
import './index.css';
import './App.css';


const My404 = () => {
  return(
    <div>
    Whoops, page not found.
    </div>
  )
}

<<<<<<< HEAD
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
        
=======
>>>>>>> f760630dfacdfefb159dbdaee8ec69d438f39d0f

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
     
      <div>
        <Switch>
          <Header/>
          <Route component={My404} />
          <Route exact path="/" component = {Login}/>
          <Route exact path="/" component = {Search}/>
          <Route exact path="/photos" component={ PhotoContainer } />
          <Route exact path="/freelancer" component={ Freelancer } />
          <Route exact path="/location" component={ LocationContainer } />
          <LocationContainer />
        </Switch>
      </div>
    )
  }
}

export default App;
