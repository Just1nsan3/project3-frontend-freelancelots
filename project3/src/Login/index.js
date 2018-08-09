import React, { Component } from 'react';

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
			this.props.hideLoginRegister();
			// call a username function that you will write --
			// this function will be passed in from props from App throught header
			// and should set a username and logged in boolean in state in App component
			// that way the entire app will know what user is logged in and also this can be apssed from App down into Admin

			// you will need to pass this info about who is looged in from app down into admin


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
			</div>
				)
		}
}



export default Login;
