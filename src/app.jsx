import React from 'react';

import Header from './components/Header';
import Button from './components/Button';

import useDomain from './hooks/useDomain';

import './app.scss';

const App = () => {
  const [issues, getIssues] = useDomain('get_issues', [], true);

  return (
    <div className="app">
      <Header />
      <main>
        <ul>
          {issues.map(issue => (
            <li key={issue.id}>{issue.title}</li>
          ))}
        </ul>
        <Button size="medium" stl="outlined" onClick={() => getIssues()}>
          Get Issues
        </Button>
      </main>
    </div>
  );
};

export default App;
