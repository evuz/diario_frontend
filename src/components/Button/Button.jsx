import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, onClick, size, color, stl, disabled, loading }) => {
  const btnStyle = stl && `is-${stl}`;
  const btnSize = size && `is-${size}`;
  const btnColor = color && `is-${color}`;
  const btnLoading = loading && 'is-loading';
  const className = ['button', btnStyle, btnSize, btnColor, btnLoading]
    .filter(e => e)
    .join(' ');
  return (
    <button
      onClick={onClick}
      type="button"
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  color: PropTypes.oneOf([
    'light',
    'dark',
    'black',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger',
  ]),
  stl: PropTypes.oneOf(['', 'outlined', 'inverted', 'outlined', 'rounded']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  size: 'normal',
  onClick: () => {},
  color: 'primary',
  stl: '',
  disabled: false,
  loading: false,
};

export default Button;
