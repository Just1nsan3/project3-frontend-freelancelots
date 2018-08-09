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
      return(
        
        <div>
        <Header/>

        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/" component={ Freelancer } />
          <Route exact path="/photos" component={ PhotoContainer } />
          <Route component={My404} />

        </Switch>
        </div>
        
      )
    }
  
}
export default App;
