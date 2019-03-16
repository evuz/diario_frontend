/* eslint-disable react/prop-types */
import React from 'react';

import SocialMedia from '../SocialMedia';

import './MenuInfo.scss';

function MenuInfo({ name, photo, summary, socialMedia }) {
  return (
    <nav className="menu-info">
      <div className="menu-info__top-content">
        <div>
          <img className="menu-info__avatar" src={photo} alt={name} />
        </div>
        <div className="menu-info__right-content">
          <h5 className="menu-info__name">{name}</h5>
          <p className="menu-info__summary">{summary}</p>
        </div>
      </div>
      <div className="menu-info__social-media">
        <SocialMedia networks={socialMedia} />
      </div>
    </nav>
  );
}

MenuInfo.defaultProps = {
  socialMedia: [],
};

export default MenuInfo;
