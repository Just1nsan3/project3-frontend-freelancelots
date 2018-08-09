import React, { Component } from 'react'

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
      <h1>What are you looking for</h1>
      <label>
      <input type="text" name="specialty" placeholder="specialty" />
      </label>
      <label>
      <input type="text" name="locaiton" placeholder="location" />
      </label>
      </div>
    )
  }
}

export default Search;
