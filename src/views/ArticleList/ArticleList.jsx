import React, { useEffect } from 'react';

import Button from '../../components/Button';
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
      <div className="article-list__container">
        <PersonalInfo />
        <main className="article-list">
          <ArticlePreviewList articles={issues} />
          <div className="article-list__buttons">
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
      </div>
    </Container>
  );
}

export default ArticleList;
