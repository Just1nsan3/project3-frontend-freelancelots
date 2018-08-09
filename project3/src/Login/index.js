import React, { Component } from 'react';
import Search from '../Search'
import LocationContainer from '../LocationContainer'

class Login extends Component {
	constructor(){
		super()
		this.state = {
			username: "",
			password: ""
		}
	}
	handleSubmit = async (e) => {
		e.preventDefault();

		const loginResponse = await fetch('http://localhost:9000/auth/login', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			header: {
				'Content-Type': 'application/json'
			}
		});

		const parsedResponse = await loginResponse.json();

		if(parsedResponse.data === 'login successful') {
			this.props.history.push('/photos');
			// call set username function -- this function will be passed in from props and should set a username in App
			// that way the entire app will know what user is logged in and also this can be apssed from App down into PhotoContainer
		}


	}
		handleChange = (e) => {
			this.setState({[e.target.name]: e.target.value});
		}

		render(){
			return(
				<div>
					
				<form className="login" onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input type='text' name='username' onChange={this.handleChange} />
					</label>
					<label>
						Password:
						<input type='password' name='password' onChange={this.handleChange} />
					</label>
						<input type='submit' value='Login' />
						<label>
						<h1>Register:</h1>
						<label>
						Username:
						<input type='text' name='username' onChange={this.handleChange} />
					</label>
						Password:
						<input type='password' name='password' onChange={this.handleChange} />
					</label>
					
						<input type='submit' value='Register' />
				</form>
				<LocationContainer />
				<Search />
			</div>
				)
		}
}



export default Login;
