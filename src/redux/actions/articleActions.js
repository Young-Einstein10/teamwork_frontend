import axios from 'axios';


const token = localStorage.getItem('FBIdToken');
axios.defaults.headers.common['Authorization'] = token;


export const getArticle = (id) => (dispatch) => {
  axios
    .get(`/articles/${id}`)
    .then((res) => {console.log(res.data)
      if (res.data.status === 'error') {
        dispatch({ type: 'GET_ARTICLE_FAILED', payload: res.data.error });
      } else {
        dispatch({ type: 'GET_ARTICLE_SUCCESS', payload: res.data });
      }
    })
    .catch((err) => dispatch({ type: 'GET_ARTICLE_FAILED', payload: err })
    );
};




export const commentArticle = (id, commentData) => (dispatch) => {
  axios
    .post(`/articles/${id}/comment`, commentData)
    .then((res) => {
      if (res.data.status === 'error') {
        dispatch({ type: 'COMMENT_ARTICLE_FAILED', payload: res.data });
      } else {console.log(res.data)
        dispatch({ type: 'COMMENT_ARTICLE_SUCCESS', payload: res.data });
      }
    })
    .catch((err) => dispatch({ type: 'COMMENT_ARTICLE_FAILED', payload: err })
    );
};


export const deleteArticle = (id) => (dispatch) => {
  axios
    .delete(`/articles/${id}`)
    .then((res) => {console.log(res.data)
      if (res.data.status === 'error') {
        dispatch({ type: 'DELETE_ARTICLE_FAILED', payload: res.data });
      } else {
        dispatch({ type: 'DELETE_ARTICLE_SUCCESS', payload: res.data });
      }
    })
    .catch((err) => dispatch({ type: 'DELETE_ARTICLE_FAILED', payload: err })
    );
};