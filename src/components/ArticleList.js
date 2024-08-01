import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  if (!Array.isArray(posts)) {
    console.error("Expected 'posts' prop to be an array");
    return <p>There was an error loading the articles.</p>;
  }

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
};

export default ArticleList;

