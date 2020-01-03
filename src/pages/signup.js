import React from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

class Signup extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      gender: '',
      jobrole: '', 
      department: '', 
      address: '', 
      is_admin: false
    }
  }
  
  OnFieldChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.signupUser(this.state, this.props.history)
  }


	render() {
		return (
			<div style={{marginTop: 10}}>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Firstname: </label>
            <input  
              type="text"
              name="firstname"
              className="form-control"
              value={this.state.firstname}
              onChange={this.OnFieldChange}
            />
          </div>

          <div className="form-group"> 
            <label>Lastname: </label>
            <input  
              type="text"
              name="lastname"
              className="form-control"
              value={this.state.lastname}
              onChange={this.OnFieldChange}
            />
          </div>

          <div className="form-group"> 
            <label>Email: </label>
            <input  
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.OnFieldChange}
            />
          </div>
                    
          <div className="form-group"> 
            <label>Password: </label>
            <input  
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.OnFieldChange}
            />
          </div>

          <div className="form-group">
            <p>Gender:</p>
            <select className='form-control' name="gender" value={this.state.gender} onChange={this.OnFieldChange}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className="form-group">
            <p>Department:</p>
            <input type='text' name="department" className='form-control' placeholder='Accounts' onChange={this.OnFieldChange} />
          </div>

          <div className="form-group">
              <p>Job role:</p>
              <input type='text' name="jobrole" className='form-control' placeholder='Manager' onChange={this.OnFieldChange} />
          </div>

          <div className="form-group">
              <p>Address:</p>
              <input type='text' name="address" className='form-control' placeholder='12th Avenue' onChange={this.OnFieldChange} />
          </div>

          <div className="form-group">
             <input type="submit" value="Sign Up" className="btn btn-primary" />
          </div>
        </form>
      </div>
		);
	}
}


// const mapStateToProps = (state) => ({
//   user: state.user,
// });

const mapActionsToProps = {
  signupUser
};

export default connect(null, mapActionsToProps)(Signup);