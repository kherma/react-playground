import React from 'react';
import Book from './Book';
import data from './store';

const BookList = () => {
  return (
    <section className="bookList">
      {data.map((book, index) => (
        <Book key={book.id} {...book} counter={index + 1} />
      ))}
    </section>
  );
};

export default BookList;
