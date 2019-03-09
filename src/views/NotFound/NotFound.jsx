import React from 'react';

import Container from '../../components/Container';

import './NotFound.scss';

function NotFound() {
  return (
    <main className="page-not-found">
      <Container>
        <h1 className="page-not-found__message">
          <span className="page-not-found__code">404</span>
          <span className="page-not-found__info">Page not found</span>
        </h1>
      </Container>
    </main>
  );
}

export default NotFound;
