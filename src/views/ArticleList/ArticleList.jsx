import React, { useEffect } from 'react';

import Button from '../../components/Button';
import Container from '../../components/Container';
import useDomain from '../../hooks/useDomain';

import './ArticleList.scss';
import { ArticlePreviewList } from '../../components/ArticlePreview';

function ArticleList() {
  const [{ data: issues }, getIssues] = useDomain('get_issues', [], true);

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <main className="article-list">
      <Container>
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
      </Container>
    </main>
  );
}

export default ArticleList;
