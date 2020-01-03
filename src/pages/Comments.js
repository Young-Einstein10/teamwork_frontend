import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentArticle } from '../redux/actions/articleActions';

class Comments extends Component {
  state = {
    comments: ''
  }

  onCommentChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitComment = e => {
    e.preventDefault();
    console.log(this.state)
    this.props.commentArticle(this.props.articleId, this.state)
  }

  render() {
    const { comments } = this.props;
    return (
      <>  

        <div style={{marginTop: 10}}>
          <form onSubmit={this.onSubmitComment}>
            <div className="form-group"> 
              <textarea  
                className="form-control"
                placeholder="Add to the Discussion"
                name="comments"
                value={this.state.comments}
                onChange={this.onCommentChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" value="Add Comment" className="btn btn-primary" />
            </div>
          </form>
        </div>

        <div>
          <h3>Comments</h3>

          <div>
            {
              comments && comments.map(item => {
                const { authorId, comment, createdOn } = item
              
                return (
                  <div className="jumbotron text-center" key={Math.random() * 5}>
                    <p>{authorId}</p>
                    <p>{comment}</p>
                    <p>{createdOn}</p>
                  </div>							
                )
              })
            }
          </div>
        </div>
      </>
    );
  }
}



export default connect(null, { commentArticle })(Comments);
