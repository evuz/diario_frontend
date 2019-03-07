import React from 'react';

import Header from './components/Header';
import Router from './router';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  );
}

export default App;
