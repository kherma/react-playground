import React, { useReducer } from 'react';

const initialState = {
  baseCounter: 0,
  secondCounter: 5,
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return { baseCounter: state.baseCounter + action.payload };
    case 'DECREMENT':
      return { baseCounter: state.baseCounter - action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="item">{count.baseCounter}</div>
      <button
        className="btn"
        onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}
      >
        Decrement
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}
      >
        Increment 5
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}
      >
        Decrement 5
      </button>
      <button className="btn" onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
};
export default ComplexCounter;
