import React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import PropTypes from 'prop-types';

import './ArticlePreview.scss';

function ArticlePreview({ article }) {
  return (
    <div className="article-preview">
      <Link to={`article/${article.id}`} className="article-preview__title">
        {article.title}
      </Link>
      <div className="article-preview__subheader">
        <div className="article-preview__date">
          {format(article.createdAt, 'MM/DD/YYYY HH:mm')}
        </div>
      </div>
    </div>
  );
}

ArticlePreview.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    summary: PropTypes.string,
    readTime: PropTypes.number,
    createdAt: PropTypes.number,
    updatedAt: PropTypes.number,
  }),
};

ArticlePreview.defaultProps = {
  article: {},
};

export default ArticlePreview;
