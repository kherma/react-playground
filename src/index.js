import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Booklist = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81FeR-7X-WL._AC_UL200_SR200,200_.jpg"
    alt="book 1"
  />
);

const Title = () => <h2>Just as I Am: A Memoir</h2>;

const Author = () => (
  <p style={{ color: '#617d98', fontSize: '0.75rem' }}>by Cicely Tyson</p>
);

ReactDom.render(<Booklist />, document.getElementById('root'));
