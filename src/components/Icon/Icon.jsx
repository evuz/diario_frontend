import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import icons from './icons';

import './Icon.scss';

function Icon({ icon, size, color }) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    fill: color,
  };
  const IconComponent = icons[icon] || icons.default;
  return (
    <div className="icon">
      <Suspense fallback={<div>Loading...</div>}>
        <IconComponent style={style} />
      </Suspense>
    </div>
  );
}

Icon.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  color: 'black',
};

export default Icon;
