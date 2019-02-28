import React from 'react';

import Header from './components/Header/Header';
import Button from './components/Button/Button';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Button size="medium" color="light" stl="rounded">
          Sign in with Github
        </Button>
      </main>
    </div>
  );
}

export default App;
