import React from 'react';

import logo from '../../assets/react-logo.svg';
import Container from '../Container';

import './Header.scss';

function Header() {
  return (
    <Container>
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__text">Diario de un Front-End</h1>
      </header>
    </Container>
  );
}

export default Header;
