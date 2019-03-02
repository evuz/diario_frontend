import React from 'react';

import Header from './components/Header';
import Button from './components/Button';
import domain from './domain';

import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Button
          size="medium"
          stl="outlined"
          onClick={() =>
            domain
              .get({ useCase: 'get_issues' })
              .execute()
              .then(res => {
                console.log(res);
              })
          }
        >
          Get Issues
        </Button>
      </main>
    </div>
  );
};

export default App;
