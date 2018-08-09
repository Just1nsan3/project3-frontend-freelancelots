import React, { Component } from 'react';
import Login from '../Login';
import {Route, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Freelancer from '../Freelancer'
class Header extends Component {

	constructor() {
		super();
		this.state = {
			registerShowing: false,
      loginShowing: false
		}
	}

  showRegister = () => {
		console.log("reg");
		// set loginShowing to false
		// set registerShowing to true
  }

  showLogin = () => {
		console.log("log");
		// set loginShowing to true
		// set registerShowing to false
  }

	hideLoginRegister = () => {
		// set both booleans to false
	}

	render() {
		// todo: make login and register render conditionally based on state using a ternary
		return (
			<header>
			<Login hideLoginRegister={this.hideLoginRegister} setUsername={this.props.setUsername} />
			<Freelancer hideLoginRegister={this.hideLoginRegister} setUsername={this.props.setUsername} />
	    <h1>Knigts of Lancelot</h1>
				<ul>
					<li onClick={this.showLogin}>Login</li>
					<li onClick={this.showRegister}>Register</li>
	        <li><Link to='/profile'>Profile</Link></li>
					{ this.props.loggedIn ? <li><Link to='/admin'>Admin</Link></li> : null }
				</ul>
			</header>
		)
	}
}



export default Header;
