import React from 'react';
import { Redirect } from 'react-router-dom';


export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	onEmailChange = e => {
        this.setState({email: e.target.value})
	}

    onPasswordChange = e => {
        this.setState({password: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.fetchUsers()
    }

    fetchUsers() {
      // Where we're fetching data from
      fetch('http://localhost:3000/api/v1/auth/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password 
        }) 
      })
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the users state
        .then(data =>
          // console.log(data)
          data.status === 'success' ? 'working' : "failed"
          
        )
        // Catch any errors we hit and update the app
        .catch(error => console.log(error));
    }

	render() {
		return (
			<div style={{marginTop: 10}}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Email: </label>
                        <input  
                        	type="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    
                    <div className="form-group"> 
                        <label>Password: </label>
                        <input  
                        	type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
		);
	}
}
