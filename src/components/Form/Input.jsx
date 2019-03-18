import React from 'react';
import PropTypes from 'prop-types';

function Input({ label, name, type, placeholder, error, value, onChange }) {
  const mainClass = 'input';
  const validClass = error && 'is-danger';
  const className = [mainClass, validClass].filter(e => e).join(' ');
  return (
    <div className="field">
      {label ? (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        id={name}
        className={className}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
      {error ? <p className="help is-danger">{error}</p> : null}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
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
