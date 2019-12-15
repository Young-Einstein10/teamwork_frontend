import React, { Component } from 'react';

class Dashboard extends Component {
		constructor(props) {
		super(props);

		this.state = {
	    isLoading: true,
	    feeds: [],
	    error: null
		}
	}

	componentDidMount() {
	  this.fetchUsers();
	}

	fetchUsers() {
  fetch(`http://localhost:3000/api/v1/feed`, {
  	headers: {
  		'Content-Type': 'application/json',
  		'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU3NjM2MTM1NywiZXhwIjoxNTc2NDQ3NzU3fQ.Id8szb9Z6bnaJD7FGP1P7_JXus5GekqSjoKzllLNsTE"
  	}
  })
    .then(response => response.json())
    .then(data => {
	    	console.log(data)
	    	if (data.status === 'success') {
	    		this.setState({
		        feeds: data.data,
		        isLoading: false,
		      })
	    	} else {
					this.setState({ error: data.error.message, isLoading: false })	    	}	      
    		}
    )
    .catch(error => this.setState({ error, isLoading: false }));
}

	render() {
		const { isLoading, feeds, error } = this.state;
		return (
			<div>
				<h2>Dashboard</h2>
      	{error ? <p>{error}</p> : null}
      	{
      		!isLoading 
      		? 
					(feeds.map(feed => {
						const { articleId, gifid, authorId, title, article, imageurl, createdOn } = feed;
						return (
							<div className="jumbotron" key={(typeof articleId === 'number' ? articleId : gifid)}>
								<h1 className="display-4">{title}</h1>
								<p>{authorId}</p>
								<p>{gifid}</p>
								<p className="lead">{article}</p>
								<hr className="my-4"></hr>
								<p>{createdOn}</p>
								<p>{imageurl}</p>
							</div>
						)
					})) 
					: 
					(
						<h3>Loading...</h3>
					)
				}
			</div>
		);
	}
}


export default Dashboard;