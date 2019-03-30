export const LOGIN = 'USER_LOGIN';
export const LOGOUT = 'USER_LOGOUT';

function reducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.user;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

export default reducer;
