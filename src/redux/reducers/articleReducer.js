const initState = {
  article: [],
  articleError: null,
  comments: [],
  commentError: null
}


const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ARTICLE_FAILED':
      return {
        ...state,
        articleError: action.payload
      }

    case 'GET_ARTICLE_SUCCESS':
      return {
        ...state,
        article: action.payload.data
      }
    
    case 'COMMENT_ARTICLE_SUCCESS':
      return {
        ...state,
        comments: [...state.comments, action.payload.data]
      }

    case 'COMMENT_ARTICLE_FAILED':
      return {
        ...state,
        commentError: action.payload
      }
    default:
      return state
  }
};

export default articleReducer;

