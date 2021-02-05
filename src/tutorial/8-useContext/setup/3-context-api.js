import React, { useContext } from 'react';

const UserContext = React.createContext();

// ===============
//     FILE A
// ===============
const ContextApiA = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: 'Mitis', surname: 'Herma' }}>
        <ContextApiB />
      </UserContext.Provider>
    </div>
  );
};

// ===============
//     FILE B
// ===============
const ContextApiB = () => {
  return (
    <div>
      <ContextApiC />
    </div>
  );
};

// ===============
//     FILE C
// ===============
const ContextApiC = () => {
  return (
    <div>
      <ContextApiD />
    </div>
  );
};

// ===============
//     FILE D
// ===============
const ContextApiD = () => {
  const { name, surname } = useContext(UserContext);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{surname}</h2>
    </div>
  );
};

export default ContextApiA;
