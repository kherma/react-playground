import React from 'react';
import ReactDom from 'react-dom';

const Booklist = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
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

const Author = () => <p>by Cicely Tyson</p>;

ReactDom.render(<Booklist />, document.getElementById('root'));
