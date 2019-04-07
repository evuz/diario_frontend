import React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from './ArticlePreview';

import './ArticlePreviewList.scss';

function ArticlePreviewList({ articles }) {
  return (
    <ul className="article-preview-list">
      {articles.map(article => (
        <li key={article.id} className="article-preview-list__item">
          <ArticlePreview key={article.id} article={article} />
        </li>
      ))}
    </ul>
  );
}

ArticlePreviewList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      summary: PropTypes.string,
      readTime: PropTypes.number,
      createdAt: PropTypes.number,
      updatedAt: PropTypes.number,
    }),
  ),
};

ArticlePreviewList.defaultProps = {
  articles: [],
};

export default ArticlePreviewList;
