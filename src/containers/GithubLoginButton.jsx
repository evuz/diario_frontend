import React, { useContext } from 'react';

import GithubLoginButton from '../components/GithubLoginButton';
import UserContext from '../context/user/UserContext';
import useDomain from '../hooks/useDomain';

function GithubLoginButtonContainer() {
  const { login } = useContext(UserContext);
  const [{ loading }, githubSignIn] = useDomain('login');

  function signIn() {
    githubSignIn().then(u => {
      login(u);
    });
  }

  return <GithubLoginButton loading={loading} onClick={signIn} />;
}

export default GithubLoginButtonContainer;
