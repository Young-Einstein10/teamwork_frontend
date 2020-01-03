import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInNav from './SignedInNav';
import SignoutNav from './SignoutNav';

class Navbar extends Component {	
  render() {
		const { authenticated } = this.props.user;

		if (authenticated) {
			return (
				<div>
					<SignedInNav />
				</div>
			)
		}

    return (
			<div>
				<SignoutNav />
			</div>
		)
  }
}


const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Navbar);
