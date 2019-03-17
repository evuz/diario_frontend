import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

function Input({ label, name, type, placeholder, error, value, onChange }) {
  const isTextArea = type === 'textarea';
  const mainClass = isTextArea ? 'textarea' : 'input';
  const validClass = error && 'is-danger';
  const className = [mainClass, validClass].filter(e => e).join(' ');
  return (
    <div className="field">
      {label ? (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      ) : null}
      {isTextArea ? (
        <textarea
          id="input"
          className={className}
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <input
          id={name}
          className={className}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      )}
      {error ? <p className="help is-danger">{error}</p> : null}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['textarea', 'text', 'password', 'email', 'tel']),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  label: undefined,
  error: undefined,
};

export default Input;
