import React from 'react';

import Button from '../../components/Button';
import useDomain from '../../hooks/useDomain';

import './ArticleList.scss';
import { ArticlePreviewList } from '../../components/ArticlePreview';

function ArticleList() {
  const [issues, getIssues] = useDomain('get_issues', [], true);
  console.log(issues);
  return (
    <main className="article-list">
      <ArticlePreviewList articles={issues} />
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