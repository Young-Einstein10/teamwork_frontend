import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeeds } from '../redux/actions/feedActions';
import Article from './Article';
import Gif from './Gif';


class Dashboard extends Component {
	state = {
	  isLoading: true,
	}


	componentDidMount() {
		this.props.getFeeds();
		this.setState({ isLoading: false })
	}


  show = () => {
    this.props.getFeeds()
    console.log(this.props.feeds)
  }


	render() {
    const { isLoading } = this.state;
    const { feedError, feeds } = this.props.feeds;
    const { authenticated } = this.props.user;

		if(!authenticated) {
			this.props.history.push('/login')
		}

		return (
			<div>
				<h2 onClick={this.show}>Dashboard</h2>
      	{feedError ? <p>{feedError}</p> : null}
      	{
      		!isLoading 
      		? 
					(feeds && feeds.map(feed => {
						const { articleId, gifid, authorId, title, article, imageurl, createdOn } = feed;
						return (
							<div key={Math.random() * 3}>
								{typeof articleId === 'number' 
								? 
								<Article articleId={articleId} authorId={authorId} title={title} article={article} createdOn={createdOn.toString()} /> 
								: 
								<p>Gif</p>}
							</div>							
						)
					})) 
					: 
					(
						<div className="d-flex justify-content-center">
							<div className="spinner-border" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					)
				}
			</div>
		);
	}
}


const mapStateToProps = (state) => {
  return {
    feeds: state.feed,
    user: state.user,     
  }
}


export default connect(mapStateToProps, { getFeeds })(Dashboard);