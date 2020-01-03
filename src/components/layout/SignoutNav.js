import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';


const SignoutNav = () => {
  return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div>
				<a className="navbar-brand" href="https://teamworkapp.com">
					<img src={logo} width="30" height="30" alt="Teamwork" />
				</a>
				<Link to="/" className="navbar-brand">Teamwork App</Link>
			</div>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">                        
	        <li className="navbar-item">
	          <Link to="/login" className="nav-link">Login</Link>
	        </li>
	        <li className="navbar-item">
	          <Link to="/signup" className="nav-link">Sign Up</Link>
	        </li>	
	      </ul>
			</div>
		</nav>
  );
}

export default SignoutNav;
