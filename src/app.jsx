import React from 'react';

import Router from './router';
import Store from './context/Store';

function App() {
  return (
    <div className="app">
      <Store>
        <Router />
      </Store>
    </div>
  );
}

export default App;
