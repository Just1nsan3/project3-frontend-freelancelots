import React, { Component } from 'react';

class CreatePhoto extends Component {
	constructor(){
		super();

		this.state = {
			tag: "",
      url: "", 
      description: ""
		}
	}
	updatePhoto = (e) => {

		this.setState({[e.currentTarget.name]: e.currentTarget.value});
	}
  // creTE HANDLE SUBMIT

	render(){
		return (
			<form>
        <label>
          Photo:
          <input type="text" name="url" placeholder="PhotoURL" onChange={this.updatePhoto}/>
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={this.updatePhoto}/>
        </label>
        <label>
          Tag:
          <input type="text" name="tag" onChange={this.updatePhoto}/>
        </label>
        <input type='submit'/>
      </form>

		)
	}
}

export default CreatePhoto;

