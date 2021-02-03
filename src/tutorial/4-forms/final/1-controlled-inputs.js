import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      setPeople((prevPeople) => [...prevPeople, person]);
      setName('');
      setEmail('');
    }
  };
  return (
    <React.Fragment>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map(({ name, email, id }) => (
          <div key={id} className="item">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        ))}
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
