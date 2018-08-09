import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer'
import Login from './Login';
import Freelancer from './Freelancer';
import Modal from './Modal';
import Header from './Header'
import {Route, Switch} from 'react-router-dom'
import './index.css';
import './App.css';


const My404 = () => {
  return(
    <div>
    Whoops, page not found.
    </div>
  )
}


class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render(){
    return((
     
      <div>
        <Switch>
          <Header/>
          <Route exact path="/" component = {Login}/>
          <Route exact path="/photos" component={ PhotoContainer } />
          <Route exact path="/freelancer" component={ Freelancer } />
          <Route exact path="/location" component={ LocationContainer } />
          <Route component={My404} />
          <LocationContainer />

        </Switch>
      </div>
    )
  }
}

export default App;
