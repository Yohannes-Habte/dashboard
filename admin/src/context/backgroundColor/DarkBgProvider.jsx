import React, { useReducer } from 'react';
import { createContext } from 'react';
import Reducer from './Reducer';

const initialAtate = {
  darkMode: false,
};

export const DarkContext = createContext(initialAtate);

const DarkBgProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialAtate);

  return (
    <DarkContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkBgProvider;
