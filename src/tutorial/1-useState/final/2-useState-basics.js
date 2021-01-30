import React, { useState } from 'react';

const UseStateBasics = () => {
  const [state, setState] = useState('Hello Mitis');

  const handleClick = () => {
    state === 'Hello Mitis' ? setState('Hello Hania') : setState('Hello Mitis');
  };

  return (
    <React.Fragment>
      <h1>{state}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change name
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
