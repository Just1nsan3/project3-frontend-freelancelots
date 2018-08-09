import React, { Component } from 'react'
import LocationContainer from '../LocationContainer'


class Search extends Component{
  constructor(){
    super();
    this.state = {
      specialty: "",
      location: "",
      freelancerResults: []
    }
  }

  //functions/methods:
  // 1. hit back end, get info about freelancers (uincluding location), and store it in setState

  // 2.  when a user clicks on a serarch result, it should call setFeelancer from props


  render(){
    return(
      <div>

        <LocationContainer freelancerResults={this.state.freelancerResults}/>
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
