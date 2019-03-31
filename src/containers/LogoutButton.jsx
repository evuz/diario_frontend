import React, { useContext } from 'react';

import LogoutButton from '../components/LogoutButton';
import UserContext from '../context/user/UserContext';
import useDomain from '../hooks/useDomain';

function LogoutButtonContainer() {
  const { user, logout } = useContext(UserContext);
  const logoutUseCase = useDomain('logout')[1];

  function handleClick() {
    logoutUseCase().then(() => {
      logout();
    });
  }

  return <LogoutButton user={user} onClick={handleClick} />;
}

export default LogoutButtonContainer;
