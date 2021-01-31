import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `useEffect (${value})`;
    }
  }, [value]);
  console.log('Render component');
  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => setValue((pervState) => pervState + 1)}
      >
        Add 1
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
