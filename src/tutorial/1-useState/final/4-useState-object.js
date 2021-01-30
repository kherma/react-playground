import React, { useState } from 'react';

const UseStateObject = () => {
  const [state, setState] = useState({
    name: 'peter',
    age: 24,
    message: 'I love parrots',
  });

  const changeMessage = () => {
    setState({ ...state, message: 'I love Mitis' });
  };
  return (
    <React.Fragment>
      <h3>{state.name}</h3>
      <h3>{state.age}</h3>
      <p>{state.message}</p>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
