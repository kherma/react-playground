import React, { useState } from 'react';
import { data } from '../../../data';
import { Link } from 'react-router-dom';

const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map(({ name, id }) => {
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <Link to={`/person/${name}`}>Learn more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
