import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Booklist = () => {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
};

const Book = () => {
  const title = 'Just as I Am: A Memoir';
  const author = 'Cicely Tyson';
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81FeR-7X-WL._AC_UL200_SR200,200_.jpg"
        alt="book 1"
      />
      <h2>{title}</h2>
      <p>{author.toUpperCase()}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));
