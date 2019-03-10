import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import './Article.scss';
import useDomain from '../../hooks/useDomain';
import Container from '../../components/Container';

function Article({ match }) {
  const [{ data: article, loading }, getIssue] = useDomain('get_issue', null);

  useEffect(() => {
    getIssue({ number: match.params.number });
  }, []);

  console.log(article);

  if (!article || loading) return null;

  return (
    <main className="article">
      <Container>
        <div className="article__header">
          <div className="article__title">{article.title}</div>
          <div className="article__subheader">
            <a href={article.user.url} className="article__author">
              @{article.user.name}
            </a>
            <div className="article__date">
              {format(article.updatedAt, 'MM/DD/YYYY HH:mm')}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      number: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Article;
