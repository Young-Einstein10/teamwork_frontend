import React from 'react';
import PostNavbar from '../components/layout/PostNavbar';	
import axios from 'axios';
import {connect} from 'react-redux';


class EditArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      article: '',
    }
  }

  onTitleChange = (e) => {
    this.setState({title: e.target.value})

  }

  onArticleChange = (e) => {
    this.setState({article: e.target.value})
  }

  onSubmitPost = e => {
    e.preventDefault();
    console.log('post working')
    const postData = {
      title: this.state.title,
      article: this.state.article
    }

    axios
      .patch(`/articles/${this.props.match.params.id}`, postData)
      .then((res) => {console.log(res)
        if (res.data.status === 'error') {
          console.log(res.data)  
          console.log('EDIT_ARTICLE_FAILED')
        } else {
          console.log(res.data)  
          console.log('EDIT_ARTICLE_SUCCESS')
          this.props.history.push('/dashboard')
        }
      })
      .catch((err) => {
          console.log(err)
          console.log('EDIT_ARTICLE_FAILED')
        }
      );
    }
  

  

  render() {
    const { authenticated } = this.props;

    if(!authenticated) {
      this.props.history.push('/login')
    }

    return (
      <div>
        <PostNavbar />
        <h2>Edit Article</h2>
          <div style={{marginTop: 10}}>
              <form onSubmit={this.onSubmitPost}>
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
                  <label>Article: </label>
                  <textarea  
                    className="form-control"
                    value={this.state.article}
                    onChange={this.onArticleChange}
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

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(EditArticle)