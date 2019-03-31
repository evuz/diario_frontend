import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './LogoutButton.scss';

function LogoutButton({ onClick, user }) {
  if (!user) {
    return null;
  }

  return (
    <button type="button" onClick={onClick} className="logout-btn">
      <div className="logout-btn__flipper">
        <img
          src={user.photoUrl}
          alt={user.name}
          className="logout-btn__avatar"
        />
        <div className="logout-btn__icon">
          <Icon icon="logout" color="white" />
        </div>
      </div>
    </button>
  );
}

LogoutButton.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    photoUrl: PropTypes.string,
    id: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

LogoutButton.defaultProps = {
  user: null,
  onClick: () => {},
};

export default LogoutButton;
