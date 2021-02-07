import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
  const [personName, setPersonName] = useState('');
  const { name } = useParams();

  useEffect(() => {
    const fintPerson = data.find((person) => person.name === name);
    setPersonName(fintPerson.name);
  }, [name]);
  return (
    <div>
      <h1>{personName}</h1>
      <Link to="/people" className="btn">
        back to people
      </Link>
    </div>
  );
};

export default Person;
