import React from 'react';

import Header from './components/Header/Header';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Welcome to my Blog</h1>
      </main>
    </div>
  );
};

export default App;
