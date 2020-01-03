import React, { Component } from 'react';
import PostNavbar from '../components/layout/PostNavbar';	

export default class PostGif extends Component {
	constructor(props) {
    super(props);

    this.state = {
      title: '',
      gif: ''
    }
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value})

  }

  ongifChange = (e) => {
    this.setState({gif: e.target.value})
  }

  onSubmitGif = e => {
    e.preventDefault();
    console.log(this.state)
    this.postgif()
  }

  postgif() {

  }

	render() {
		return (
			<div>
        <PostNavbar />
        <h2>Post a Gif</h2>
          <div style={{marginTop: 10}}>
              <form onSubmit={this.onSubmitGif}>
                <div className="form-group"> 
                  <label>Title: </label>
                  <input  
                    type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                  />
                </div>
                    
                <div className="form-group"> 
                  <label>Gif: </label>
                  <input  
                    type="file"
                    className="form-control"
                    value={this.state.gif}
                    onChange={this.onGifChange}
                  />
                </div>

                <div className="form-group">
                  <input type="submit" value="Post" className="btn btn-primary" />
                </div>
              </form>
          </div>
      </div>
		);
	}
}
