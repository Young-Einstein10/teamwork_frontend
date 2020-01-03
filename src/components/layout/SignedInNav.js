import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';


const SignedInNav = () => {
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
				<ul class="navbar-nav mr-auto">
					<li className="navbar-item">
	          <Link to="/createpost" className="nav-link">Create Post</Link>
	        </li>
					<li className="navbar-item">
	          <Link to="/logout" className="nav-link">Logout</Link>
	        </li>
				</ul>	
			</div>
		</nav>
  );
}

export default SignedInNav;
