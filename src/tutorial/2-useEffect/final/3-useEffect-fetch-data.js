import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <h3>github users</h3>
      <ul className="users">
        {users.map(({ login, id, avatar_url, html_url }) => (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url} target="_blank" rel="noreferrer">
                profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UseEffectFetchData;