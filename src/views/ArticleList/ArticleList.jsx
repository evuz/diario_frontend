import React from 'react';

import Button from '../../components/Button';
import useDomain from '../../hooks/useDomain';

import './ArticleList.scss';

function ArticleList() {
  const [issues, getIssues] = useDomain('get_issues', [], true);

  return (
    <main className="article-list">
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul>
      <div className="article-list__buttons">
        <Button size="medium" onClick={() => getIssues()}>
          Get Issues
        </Button>
        <Button size="medium" stl="outlined" onClick={() => getIssues()}>
          Get Issues
        </Button>
        <Button color="info" size="medium" onClick={() => getIssues()}>
          Get Issues
        </Button>
        <Button
          color="info"
          size="medium"
          stl="outlined"
          onClick={() => getIssues()}
        >
          Get Issues
        </Button>
      </div>
    </main>
  );
}

export default ArticleList;
