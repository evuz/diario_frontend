import React from 'react';
import PropTypes from 'prop-types';

import UserState from './user/UserState';

function Store({ children }) {
  return <UserState>{children}</UserState>;
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
