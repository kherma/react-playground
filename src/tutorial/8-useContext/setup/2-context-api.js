import React from 'react';
import { UserProvider, UserConsumer } from './userContext';

// ===============
//     FILE A
// ===============
const FileA = () => {
  return (
    <div>
      {/* 2. Use Provider and assign a value */}
      <UserProvider value="Mitis">
        <FileB />
      </UserProvider>
    </div>
  );
};

// ===============
//     FILE B
// ===============
const FileB = () => {
  return (
    <div>
      <FileC />
    </div>
  );
};

// ===============
//     FILE C
// ===============
const FileC = () => {
  // 3. Use Consumer and get value by function
  return <UserConsumer>{(username) => <h1>{username}</h1>}</UserConsumer>;
};

export default FileA;
