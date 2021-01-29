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
      <p>This is a book.</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));
