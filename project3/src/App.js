import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import LocationContainer from './LocationContainer'
import PhotoContainer from './PhotoContainer'
import Profile from './Profile';
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
      freelancerShowing: '',
      username: '',
      loggedIn: false
    }
  }



  // functions needed
  // 1. setUsername or setLogged in -- pass down to header, then down to loggedIn
  //  you will need to also pass to Freelancer
  setUsername = () => {

  }


  // 2. setFreelancer -- this will be passed down to Search
    // so that search can set the current frielancer you are viewing  in this.state, above
    // (freelancerShowing--note it is currently already being passed down)
  setFreelancer = () => {

  }

  render(){
    return(
      <div>
        <Header
          loggedIn={this.state.loggedIn}
          setUsername={this.setUsername}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Search setFreelancer={this.setFreelancer}/> }
          />
          <Route
            exact
            path="/profile"
            render={ ()=><Profile freelancerShowing={this.state.freelancerShowing}/> }
          />
          <Route
            exact
            path="/admin"
            render={() => <PhotoContainer username={this.state.username} loggedIn={this.state.loggedIn}/>}
          />
          <Route component={My404} />
        </Switch>
      </div>
    )
  }
}

export default App;
