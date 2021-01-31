import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <React.Fragment>
      <h1>{text || 'john'}</h1>
      {isError && <h1>Error...</h1>}
      {isError ? <p>Error!</p> : <p>No Error...</p>}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toogle error
      </button>
    </React.Fragment>
  );
};

export default ShortCircuit;
