import React from 'react';

const Book = ({ img, title, author, counter }) => {
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <small className="counter">#{counter}</small>
    </article>
  );
};

export default Book;
