import React from 'react';

const Employee = ({ name }) => {
  return (
    <div>
      {name.split('')[1] === 'a' || name.split('')[1] === 'e' ? (
        <h2 style={{ color: 'gold' }}>Director: {name}</h2>
      ) : (
        <h2>Employee: {name}</h2>
      )}
    </div>
  );
};

export default Employee;
