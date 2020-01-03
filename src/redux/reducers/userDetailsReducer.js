const initState = {
  user_details: null,
  user_details_error: null
}


const userDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_DETAILS_ERROR':
      return {
        ...state,
        user_details_error:action.payload
      }

    case 'GET_USER_DETAILS':
      return {
        ...state,
        user_details: action.payload
      }
    default:
      return state
  }
};

export default userDetailsReducer;

