import React, { Component } from 'react';

class Freelancer extends Component {
  constructor(){
    super();

    this.state = {
      name: "",
      specialty: "",
      location: "",
      contact: ""

    }
  }
  registerUser = (e) => {

		this.setState({[e.currentTarget.name]: e.currentTarget.value});
	}
  render(){
    return (


      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder="Full Name" onChange={this.registerUser}/>
        </label>
        <label>
          Specialty:
          <input type="text" name="specialty"
            placeholder="Profession/work" onChange={this.registerUser}/>
        </label>
        <label>
          Location:
          <input type="text" name="tag" placeholder="i.e. Uptown, Chicago" onChange={this.registerUser}/>
        </label>
        <label>
          Contact:
          <input type="text" name="tag"
            placeholder="email/phone number" onChange={this.registerUser}/>
        </label>
        <input type='submit'/>
      </form>


    )
  }
}

export default Freelancer;
