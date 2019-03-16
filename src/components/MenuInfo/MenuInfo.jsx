/* eslint-disable react/prop-types */
import React from 'react';

import './MenuInfo.scss';

function MenuInfo({ name, photo, summary }) {
  return (
    <nav className="menu-info">
      <div>
        <img className="menu-info__avatar" src={photo} alt={name} />
      </div>
      <div className="menu-info__right-content">
        <h5 className="menu-info__name">{name}</h5>
        <p className="menu-info__summary">{summary}</p>
      </div>
    </nav>
  );
}

MenuInfo.defaultProps = {
  links: [],
};

export default MenuInfo;
