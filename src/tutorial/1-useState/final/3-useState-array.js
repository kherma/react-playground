import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn"
        onClick={() =>
          setPeople(
            people.length > 0 ? people.slice(0, people.length - 1) : data
          )
        }
      >
        Delete item
      </button>
      {people.map(({ id, name }) => (
        <div key={id} className="item">
          <h2>{name}</h2>
          <button className="btn" onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default UseStateArray;
