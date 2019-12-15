import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";


class Navbar extends Component {    
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
    		<nav className="navbar navbar-expand-lg navbar-light bg-light">
	            <div>
	            	<a className="navbar-brand" href="https://teamworkapp.com">
		              <img src={logo} width="30" height="30" alt="Teamwork" />
		            </a>
		            <Link to="/" className="navbar-brand">Teamwork App</Link>
	            </div>

	            <div className="collpase navbar-collapse">
	              <ul className="navbar-nav mr-auto">
	                <li className="navbar-item">
	                  <Link to="/" className="nav-link">Home</Link>
	                </li>	                
	                <li className="navbar-item">
	                  <Link to="/login" className="nav-link">Login</Link>
	                </li>
	                <li className="navbar-item">
	                  <Link to="/signup" className="nav-link">Sign Up</Link>
	                </li>
	                <li className="navbar-item">
	                  <Link to="/dashboard" className="nav-link">Dashboard</Link>
	                </li>
	              </ul>
	            </div>
          	</nav>        
        );
    }
}

export default Navbar;
