import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';



class Login extends React.Component {
  state = {
		email: '',
		password: ''
	}

	onEmailChange = e => {
    this.setState({email: e.target.value})
	}

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = this.state
    // console.log(this.props.user)
    this.props.loginUser(userData, this.props.history)
  }


	render() {      
    // if (this.props.auth.auth.isLoggedIn) {return (<Redirect to={{
    //   pathname: '/Dashboard',
    //   // state: this.state.loginData
    // }}></Redirect>)}
      
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


const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Login);