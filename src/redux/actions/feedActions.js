import axios from 'axios';


const token = localStorage.getItem('FBIdToken');
axios.defaults.headers.common['Authorization'] = token;


export const getFeeds = () => (dispatch) => {
  axios
    .get(`/feed`)
    .then((res) => {
      if (res.data.status === 'error') {
        dispatch({ type: 'GET_FEED_FAILED', payload: res.data });
      } else {
        dispatch({ type: 'GET_FEED_SUCCESS', payload: res.data });
      }
    })
    .catch((err) => dispatch({ type: 'GET_FEED_FAILED', payload: err })
    );
};