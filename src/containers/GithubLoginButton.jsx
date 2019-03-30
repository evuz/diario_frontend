import React from 'react';

import Button from '../components/Button';
import Icon from '../components/Icon';

function GithubLoginButton() {
  return (
    <Button color="dark">
      <span>Sign In with</span>
      <Icon icon="github" size={16} color="white" />
    </Button>
  );
}

export default GithubLoginButton;
