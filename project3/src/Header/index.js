import React from 'react';
import Login from '../Login';
import {Route, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
    <h1>Knigts of Lancelot</h1>
			<ul>
				<li><Link to='/'>Login</Link></li>
        
				<li><Link to='/photos'>Photos</Link></li>

			</ul>
		</header>
		)
}



export default Header;

