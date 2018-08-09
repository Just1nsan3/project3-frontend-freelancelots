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
          <Route exact path="/" component={Search} />
          <Route exact path="/photos" component={ PhotoContainer } />
          <Route exact path="/freelancer" component={ Freelancer } />
          <Route component={My404} />
        </Switch>
      </div>
    )
  }
}

export default App;
