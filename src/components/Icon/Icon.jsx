import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import icons from './icons';

function Icon({ icon, size }) {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
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
  icon: PropTypes.string.isRequired
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
