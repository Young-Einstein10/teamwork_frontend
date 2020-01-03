const initialState = {
  authenticated: false,
  credentials: {},
  authError: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_FAILED':
      return {
        ...state,
        authError: action.payload
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authenticated: true,
        credentials: action.payload        
      }

    case 'SIGNOUT_SUCCESS':
    return initialState

    case 'SIGNUP_SUCCESS':
    console.log('Signup succesful');
    return {
      ...state,
      authenticated: true,
      credentials: action.payload,
    }

    case 'SIGNUP_FAILED':
        console.log('Signup unsuccessful');
    return {
      ...state,
      authError: action.payload
    }
    default:
      return state;
  }
}
