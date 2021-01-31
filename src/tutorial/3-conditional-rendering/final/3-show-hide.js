import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShot] = useState(false);

  return (
    <React.Fragment>
      <button className="btn" onClick={() => setShot(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <Item />}
    </React.Fragment>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </div>
  );
};

export default ShowHide;
