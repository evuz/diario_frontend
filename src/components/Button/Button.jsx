import React from 'react';

import './Button.scss';

export default function Button({ children, size, color, stl, disabled }) {
  const btnStyle = stl && `is-${stl}`;
  const btnSize = size && `is-${size}`;
  const btnColor = color && `is-${color}`;
  const className = ['button', btnStyle, btnSize, btnColor]
    .filter(e => e)
    .join(' ');
  return (
    <button type="button" className={className} disabled={disabled}>
      {children}
    </button>
  );
}
