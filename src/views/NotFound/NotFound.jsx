import React from 'react';

import './NotFound.scss';

function NotFound() {
  return (
    <main className="page-not-found">
      <h1 className="page-not-found__message">
        <span className="page-not-found__code">404</span>
        <span className="page-not-found__info">Page not found</span>
      </h1>
    </main>
  );
}

export default NotFound;
