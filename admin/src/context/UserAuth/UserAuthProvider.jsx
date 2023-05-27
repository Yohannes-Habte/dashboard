import React, { createContext, useEffect, useReducer } from 'react';
import UserReducer from './UserReducer';

const initialAtate = {
  // When you refresh, the current user will be the one who has already saved in the localStorage will be on
  currentUser: JSON.parse(localStorage.getItem('user')) || true,
};

export const UserContext = createContext(initialAtate);

const UserContextProvider = ({ children }) => {
  // State variables
  const [state, dispatch] = useReducer(UserReducer, initialAtate);

  // Keep user logged in and keep on see the current page
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <UserContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
