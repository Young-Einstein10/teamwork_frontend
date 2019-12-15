import React from 'react';

export default class Signup extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div style={{marginTop: 10}}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                	<div className="form-group"> 
                        <label>Firstname: </label>
                        <input  
                        	type="text"
                            className="form-control"
                            // value={this.state.firstname}
                            // onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group"> 
                        <label>Lastname: </label>
                        <input  
                        	type="text"
                            className="form-control"
                            // value={this.state.Lastname}
                            // onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group"> 
                        <label>Email: </label>
                        <input  
                        	type="email"
                            className="form-control"
                            // value={this.state.email}
                            // onChange={this.onChangeEmail}
                        />
                    </div>
                    
                    <div className="form-group"> 
                        <label>Password: </label>
                        <input  
                        	type="password"
                            className="form-control"
                            // value={this.state.password}
                            // onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">                        
                        <div className="form-check form-check-inline">
                            <input  
                            	className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMedium" 
                                // value="Male" 
                                // checked={this.state.todo_priority==='Male'} 
                                // onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    // value="Female" 
                                    // checked={this.state.todo_priority==='Female'} 
                                    // onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Sign Up" className="btn btn-primary" />
                    </div>
                </form>
            </div>
		);
	}
}
