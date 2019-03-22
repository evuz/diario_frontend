import React, { useEffect } from 'react';

import Container from '../../components/Container';
import useDomain from '../../hooks/useDomain';
import PersonalInfo from '../../containers/PersonalInfo';
import { ArticlePreviewList } from '../../components/ArticlePreview';

import './ArticleList.scss';

function ArticleList() {
  const [{ data: articles }, getArticles] = useDomain('get_articles', [], true);

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Container>
      <div className="article-list">
        <div className="article-list__nav">
          <PersonalInfo />
        </div>
        <main className="article-list__container">
          <ArticlePreviewList articles={articles} />
        </main>
      </div>
    </Container>
  );
}

export default ArticleList;
