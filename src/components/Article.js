import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const getReadTime = (minutes) => {
    if (minutes < 30) {
      return '☕️'.repeat(Math.ceil(minutes / 5)) + ` ${minutes} min read`;
    } else {
      return '🍱'.repeat(Math.ceil(minutes / 10)) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      <p>{getReadTime(minutes)}</p>
    </article>
  );
};

export default Article;
