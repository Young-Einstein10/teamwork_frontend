const initState = {
  feeds: [],
  feedError: null
}


const feedReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_FEED_FAILED':
      return {
        ...state,
        feedError: action.payload.response
      }

    case 'GET_FEED_SUCCESS':
      return {
        ...state,
        feeds: action.payload.data
      }
    default:
      return state
  }
};

export default feedReducer;

