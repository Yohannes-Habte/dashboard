import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import DarkBgProvider from './context/backgroundColor/DarkBgProvider';
import UserContextProvider from './context/UserAuth/UserAuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkBgProvider>
      <UserContextProvider>
      <App />
      </UserContextProvider>
    </DarkBgProvider>
  </React.StrictMode>
);
