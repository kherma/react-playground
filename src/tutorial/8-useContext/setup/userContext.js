import React from 'react';

// 1. Create context (provider & consumer)
const UserContext = React.createContext('Hania');

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
