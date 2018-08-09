import React, { Component } from 'react'
import LocationContainer from '../LocationContainer'
import Login from '../Login'

class Search extends Component{
  constructor(){
    super();
    this.state = {
      specialty: "",
      location: ""
    }
  }
  render(){
    return(
      <div>
        <Login />
        <LocationContainer />
        <h1>What are you looking for</h1>
        <label>
          <input type="text" name="specialty" placeholder="specialty" />
        </label>
        <label>
          <input type="text" name="locaiton" placeholder="location" />
        </label>
        <h1> Search results will go here</h1>
      </div>
    )
  }
}

export default Search;
