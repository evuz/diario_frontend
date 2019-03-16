import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import './SocialMedia.scss';

function SocialMedia({ networks, size }) {
  return (
    <ul className="social-media">
      {networks.map(network => (
        <li className="social-media__item" key={network.type}>
          <a href={network.link} target="_blank" rel="noopener noreferrer">
            <Icon size={size} icon={network.type} />
          </a>
        </li>
      ))}
    </ul>
  );
}

SocialMedia.propTypes = {
  networks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
  size: PropTypes.number,
};

SocialMedia.defaultProps = {
  size: undefined,
};

export default SocialMedia;
