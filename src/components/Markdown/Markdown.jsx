import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import './Markdown.scss';

function Markdown({ children }) {
  return (
    <section className="markdown">
      <ReactMarkdown skipHtml source={children} />
    </section>
  );
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Markdown;
