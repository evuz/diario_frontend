import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

import './ArticlePreview.scss';

function ArticlePreview({ article }) {
  return (
    <div className="article-preview">
      <Link to={`article/${article.number}`} className="article-preview__title">
        {article.title}
      </Link>
      <div className="article-preview__subheader">
        <a href={article.user.url} className="article-preview__user">
          @{article.user.name}
        </a>
        <div className="article-preview__date">
          {format(article.updatedAt, 'MM/DD/YYYY HH:mm')}
        </div>
      </div>
    </div>
  );
}

ArticlePreview.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    number: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
      url: PropTypes.string,
    }),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
};

ArticlePreview.defaultProps = {
  article: {},
};

export default ArticlePreview;
