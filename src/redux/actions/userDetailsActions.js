import axios from 'axios';


export const getUserData = (id) => (dispatch) => {
  axios
    .get(`/getUser/${id}`)
    .then((res) => {
      if (res.data.status === 'error') {
        dispatch({ type: 'USER_DETAILS_ERROR', payload: res.data
      })
      } else {
        dispatch({ type: 'GET_USER_DETAILS', payload: res.data });   
      }      
    })
    .catch((err) => dispatch({ type: 'USER_DETAILS_ERROR', payload: err
    }));
};

export const uploadImage = (formData) => (dispatch) => {
  axios
    .post('/user/image', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
  axios
    .post('/user', userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};