import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import UserContext from './UserContext';
import userReducer, { LOGIN, LOGOUT } from './reducers';

function UserState({ children }) {
  const [userState, dispatch] = useReducer(userReducer, null);

  const login = user => {
    dispatch({ user, type: LOGIN });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        user: userState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserState;
