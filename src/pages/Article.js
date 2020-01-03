import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/userDetailsActions';

class Article extends Component {

  componentDidMount() {
		this.props.getUserData(this.props.authorId)
	}	

  render() {
		const { user_details, articleId, title, article, createdOn } = this.props;	
		// let authorName;
		// if (user_details && user_details) {
		
		// 	return authorName
		// }
		const { firstname, lastname } = user_details.data;
		const authorName = `${firstname} ${lastname}`
		// console.log(authorName)

    return (
			<Link to={{
				pathname: `/FullArticlePage/${articleId}`,
				state: authorName
			}}>
				{
						<div className="jumbotron text-center" key={articleId} >
							<h1 className="display-4">{title}</h1>
							<p>by {authorName}</p>
							<p className="lead">{article}</p>
							<hr className="my-4"></hr>
							<p>{createdOn}</p>
						</div>
				}
			</Link>
		);
  }
}



const mapStateToProps = (state) => {
  return {
    user_details: state.user_details.user_details     
  }
}

export default connect(mapStateToProps, { getUserData })(Article);
