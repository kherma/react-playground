import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Variables
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81FeR-7X-WL._AC_UL200_SR200,200_.jpg',
  title: 'Just as I Am: A Memoir',
  author: 'Cicely Tyson',
};

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg',
  title: 'The Midnight Library: A Novel',
  author: 'Matt Haig',
};

const Booklist = () => {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          velit sunt laboriosam a veniam officia reiciendis modi officiis magnam
          iste!
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));
