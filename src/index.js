import React from 'react';
import ReactDom from 'react-dom';

// const Greeting = () => {
//   return <h1>Hello World</h1>;
// };

const Greeting = () => {
  return React.createElement('h1', {}, 'Hello World');
};

ReactDom.render(<Greeting />, document.getElementById('root'));
