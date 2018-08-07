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

		if(parsedResponse.data === 'login successful')
			this.props.history.push('/photos');

		
	}
		handleChange = (e) => {
			this.setState({[e.target.name]: e.target.value});
		}
		
		render(){
			return(
				<form class="login"onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input type='text' name='username' onChange={this.handleChange} />
					</label>
					<label>
						Password:
						<input type='password' name='password' onChange={this.handleChange} />
					</label>
						<input type='submit' value='Login' />
				</form>

				)
		}
}



export default Login;