import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostNavbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-primary justify-content-center">
				<ul className="navbar-nav mr-auto d-flex flex-row justify-content-between">
					<li className="navbar-item mx-3">
		        <Link to="/postarticle" className="nav-link">Post an Article</Link>
		      </li>
		      <li className="navbar-item  mx-3">
		        <Link to="/postgif" className="nav-link">Post a Gif</Link>
		      </li>
		    </ul>
			</nav>
		);
	}
}
