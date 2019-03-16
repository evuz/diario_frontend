import React, { useEffect } from 'react';

import Container from '../../components/Container';
import useDomain from '../../hooks/useDomain';
import PersonalInfo from '../../containers/PersonalInfo';
import { ArticlePreviewList } from '../../components/ArticlePreview';

import './ArticleList.scss';

function ArticleList() {
  const [{ data: issues }, getIssues] = useDomain('get_issues', [], true);

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <Container>
      <div className="article-list">
        <div className="article-list__nav">
          <PersonalInfo />
        </div>
        <main className="article-list__container">
          <ArticlePreviewList articles={issues} />
        </main>
      </div>
    </Container>
  );
}

export default ArticleList;
