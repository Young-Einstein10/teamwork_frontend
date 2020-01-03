import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('/auth/signin', userData)
    .then((data) => {
      // console.log(data)
      if (data.data.status === 'error') {
        dispatch({ type: 'LOGIN_FAILED', payload: data.data });
      } else {     
        setAuthorizationHeader(data.data.data.token)
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.data });
        history.push('/dashboard')
      }
    })
    .catch((err) => {
      dispatch({ type: 'LOGIN_FAILED', payload: err });
    });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  axios
    .post('/auth/createUser', newUserData)
    .then((res) => {
      // console.log(data)
      if (res.data.status === 'error') {
        dispatch({ type: 'SIGNUP_FAILED', payload: res.data });
      } else {console.log('signup success') 
      console.log(res)    
        setAuthorizationHeader(res.data.data.token)
        dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data });
        history.push('/dashboard')
      }
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_FAILED', payload: err });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: 'SET_UNAUTHENTICATED' });
};




const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
