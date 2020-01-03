import React,{ Component } from 'react';
import Comments from './Comments';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getArticle } from '../redux/actions/articleActions';


class FullArticlePage extends Component {
	state = {
		isLoading: true
	}

 	componentDidMount() {
    this.props.getArticle(this.props.match.params.id)
    this.setState({ isLoading: false })
	}

	handleDelete = () => {
		console.log('delete button working')
		alert('Are you sure!!!')
	}
	
	// show = () => console.log(this.props.user, this.props.article) 

	render() {
		const { article, title, createdOn, comments, employee_id } = this.props.article;

		if (this.props.user.credentials.data && this.props.user.credentials.data === undefined) {
			this.props.history.push('/login')
		} 


		// if(this.props.user.credentials.data.userId && this.props.user.credentials.data.userId === employee_id){		
			return (
				<>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="collpase navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="navbar-item">
									<Link to={`/FullArticlePage/${this.props.match.params.id}/edit`} className="nav-link">Edit</Link>
								</li>	                
								<li className="navbar-item">
									<button className="btn btn-sm btn-primary" type="button" onClick={this.handleDelete}>Delete</button>
								</li>
							</ul>
						</div>
					</nav>
				
					<div className="jumbotron text-center" onClick={this.show}>
						<h1 className="display-4">{title}</h1>
						<p className="lead">{article}</p>
						<p>by {this.props.location.state}</p>
						<p>{createdOn}</p>
					</div>
					<Comments comments={comments} articleId={this.props.match.params.id}/>
				</>
			);
		{/* } */}
		{/* return (
		 	<>
		 		<div className="jumbotron text-center" onClick={this.show}>
		 			<h1 className="display-4">{title}</h1>
		 			<p className="lead">{article}</p>
		 			<p>{createdOn}</p>
		 			<p>employee_id: {employee_id}</p>		// 			
		 		</div>
		 		<Comments comments={comments} />
		 	</>
		); */}
	}
}


const mapStateToProps = (state) => {
  return {
		article: state.article.article,
		user: state.user
  }
}


export default connect(mapStateToProps, { getArticle })(FullArticlePage);