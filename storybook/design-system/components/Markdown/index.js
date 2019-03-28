import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PREFIX } from '../../constants';
import './markdown.scss';

const Markdown = ({ source }) => (
  <div className={`${PREFIX}-markdown`}>
    <ReactMarkdown escapeHtml={false} source={source} />
  </div>
);

export default Markdown;
