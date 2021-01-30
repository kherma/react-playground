import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const handleComplexIncrement = () => {
    setTimeout(() => {
      setValue((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <section>
      <React.Fragment>
        <h2 style={{ margin: '3rem 0' }}>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={handleDecrement}>
          Decrement
        </button>
      </React.Fragment>
      <React.Fragment>
        <h2 style={{ margin: '3rem 0' }}>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleComplexIncrement}>
          Increment Later
        </button>
      </React.Fragment>
    </section>
  );
};

export default UseStateCounter;
