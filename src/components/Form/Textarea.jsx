import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ label, name, placeholder, error, value, onChange, rows }) {
  const mainClass = 'textarea';
  const validClass = error && 'is-danger';
  const className = [mainClass, validClass].filter(e => e).join(' ');
  return (
    <div className="field">
      {label ? (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <textarea
        id="input"
        className={className}
        name={name}
        rows={rows}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {error ? <p className="help is-danger">{error}</p> : null}
    </div>
  );
}

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  label: PropTypes.string,
  error: PropTypes.string,
};

Textarea.defaultProps = {
  placeholder: '',
  rows: undefined,
  label: undefined,
  error: undefined,
};

export default Textarea;
