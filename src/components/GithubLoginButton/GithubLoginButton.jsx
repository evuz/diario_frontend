import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

function GithubLoginButton({ loading, onClick }) {
  return (
    <Button loading={loading} onClick={onClick} color="dark">
      <span>Sign In with</span>
      {!loading && <Icon icon="github" size={16} color="white" />}
    </Button>
  );
}

GithubLoginButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

GithubLoginButton.defaultProps = {
  loading: false,
  onClick: () => {},
};

export default GithubLoginButton;
