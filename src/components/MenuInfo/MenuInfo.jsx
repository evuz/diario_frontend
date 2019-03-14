/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './MenuInfo.scss';

function MenuInfo({ name, photo, summary, links }) {
  return (
    <nav className="menu-info">
      <img className="menu-info__avatar" src={photo} alt={name} />
      <h5 className="menu-info__name">{name}</h5>
      <p className="menu-info__summary">{summary}</p>
      <ul>
        {links.map(link => (
          <li>
            <Link to={link.ref}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

MenuInfo.defaultProps = {
  links: [],
};

export default MenuInfo;
