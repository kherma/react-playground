import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Variables
const books = [
  {
    id: '1',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81FeR-7X-WL._AC_UL200_SR200,200_.jpg',
    title: 'Just as I Am: A Memoir',
    author: 'Cicely Tyson',
  },
  {
    id: '2',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg',
    title: 'The Midnight Library: A Novel',
    author: 'Matt Haig',
  },
  {
    id: '3',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81ICvbFe2%2BL._AC_UL200_SR200,200_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett',
  },
];

const Booklist = () => {
  return (
    <section className="bookList">
      {books.map((book, index) => (
        <Book key={book.id} {...book} counter={index + 1} />
      ))}
    </section>
  );
};

const Book = ({ img, title, author, counter }) => {
  const clickHandler = () => {
    console.log('Hello world');
  };
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <small className="counter">#{counter}</small>
      <button type="button" onClick={clickHandler}>
        Button
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));
