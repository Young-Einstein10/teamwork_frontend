import React from 'react';
import axios from 'axios';
import PostNavbar from '../components/layout/PostNavbar';	
import {connect} from 'react-redux';


class PostArticle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      article: '',
      postResponse: null
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
    console.log(this.state)
    this.postArticle()
  }

  postArticle() {
    const postData = {
      title: this.state.title,
      article: this.state.article
    }

    axios
    .post('/articles', postData)
    .then((res) => {console.log(res)
      this.setState({postResponse: res.data})
    })
    .catch(err => console.log(err));
  }

  render() {
    const { authenticated } = this.props;

    if(!authenticated) {
      this.props.history.push('/login')
    }

    return (
      <div>
        <PostNavbar />
        <h2>Post an Article</h2>
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

export default connect(mapStateToProps)(PostArticle);