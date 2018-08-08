import React, { Component } from 'react';

class CreatePhoto extends Component {
	constructor(){
		super();

		this.state = {
			username: String,
			tag: String
		}
	}
	updatePhoto = (e) => {

		this.setState({[e.currentTarget.name]: e.currentTarget.value});
	}

	render(){
		return (
			
       <div>
        <label>
          Photo:
          <input type="text" name="title" placeholder="Photo Url" onChange={this.updatePhoto}/>
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={this.updatePhoto}/>
        </label>
        <input type='Submit'/>
      
      </div>
		)
	}
}

export default CreatePhoto;

