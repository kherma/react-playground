import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    refContainer.current.focus();
    divContainer.current.style.color = 'red';
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello</div>
    </>
  );
};

export default UseRefBasics;
