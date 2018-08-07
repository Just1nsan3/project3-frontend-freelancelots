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
			<form onSubmit={this.props.addPhoto.bind(null, this.state)}>
        <label>
          Photo:
          <input type="text" name="title" onChange={this.updatePhoto}/>
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={this.updatePhoto}/>
        </label>
        <input type='Submit'/>
      </form>

		)
	}
}

export default CreatePhoto;

