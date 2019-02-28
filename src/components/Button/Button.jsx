import React from 'react';

import './Button.scss';

export default function Button({ children, onClick, size, color, stl, disabled, loading }) {
  const btnStyle = stl && `is-${stl}`;
  const btnSize = size && `is-${size}`;
  const btnColor = color && `is-${color}`;
  const btnLoading = loading && 'is-loading';
  const className = ['button', btnStyle, btnSize, btnColor, btnLoading]
    .filter(e => e)
    .join(' ');
  return (
    <button onClick={onClick} type="button" className={className} disabled={disabled}>
      {children}
    </button>
  );
}
